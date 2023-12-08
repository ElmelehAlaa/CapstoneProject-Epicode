export const LOADING = "LOADING";
export const TOKEN = "TOKEN";
export const REGISTRAZIONE_OK = "REGISTRAZIONE_OK";
export const GET_MEMBERS = "GET_MEMBERS";
export const MY_PROFILE = "MY_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
const baseEndPoint = "http://localhost:3001";

export const RegisterProfile = (data) => {
  return async (dispatch) => {
    console.log(data);
    try {
      let resp = await fetch(baseEndPoint + "/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (resp.ok) {
        const registrationData = await resp.json();

        dispatch({ type: REGISTRAZIONE_OK, payload: registrationData });
      } else {
        const errorMessage = await resp.text();
        console.error("Errore durante la registrazione:", errorMessage);
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Errore durante la richiesta di registrazione:", error.message);
      throw error;
    }
  };
};

export const LoginProfile = (data) => {
  return async (dispatch) => {
    console.log(data);
    try {
      let resp = await fetch(baseEndPoint + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (resp.ok) {
        dispatch({ type: LOGIN, payload: data });
        const token = await resp.json();
        dispatch({ type: TOKEN, payload: token.accessToken });
        localStorage.setItem("token", token.accessToken);
      } else {
        const errorMessage = await resp.text();
        console.error("Errore durante il login:", errorMessage);
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Errore durante la richiesta di login:", error.message);
      throw error;
    }
  };
};

export const fetchMembers = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/users/members?role=PLAYER", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const fetchedMembers = await response.json();
        dispatch({ type: GET_MEMBERS, payload: fetchedMembers });
      } else if (response.status === 401) {
        console.log("Unauthorized");
      } else {
        console.error("Errore durante la richiesta:", response.statusText);
      }
    } catch (error) {
      console.error("Errore durante la richiesta:", error);
    }
  };
};

export const fetchMyProfile = (email) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`http://localhost:3001/users/search?email=${email}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        const fetchedMyProfile = await resp.json();
        dispatch({ type: MY_PROFILE, payload: fetchedMyProfile });
      } else {
        console.error("Errore durante la richiesta:", resp.statusText);
      }
    } catch (error) {
      console.error("Errore durante la richiesta:", error);
    }
  };
};

export const updateMyProfile = (localData, myData) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`http://localhost:3001/users/${myData.id}`, {
        method: "PUT",
        body: JSON.stringify({
          email: localData.email,
          username: localData.username,
          nome: localData.nome,
          cognome: localData.cognome,
          input: localData.input,
        }),
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-type": "application/json",
        },
      });
      if (resp.ok) {
        const fetchMyProfileUpdated = await resp.json();
        dispatch({ type: UPDATE_PROFILE, payload: fetchMyProfileUpdated });
      } else {
        console.error("Errore durante la richiesta:", resp.statusText);
      }
    } catch (error) {
      console.error("Errore durante la richiesta:", error);
    }
  };
};
