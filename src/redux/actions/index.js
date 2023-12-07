export const LOADING = "LOADING";
export const TOKEN = "TOKEN";
export const REGISTRAZIONE_OK = "REGISTRAZIONE_OK";
export const GET_MEMBERS = "GET_MEMBERS";
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
