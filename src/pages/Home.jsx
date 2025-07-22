import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Contact } from "../components/Contact.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const createList = async () => {
  try {
    const response = await fetch(
      "https://playground.4geeks.com/contact/agendas/danny",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
      }
    );
    const data = await response.json();
  } catch (error) {
    console.error("Error fetching contact list:", error);
  }
};

const getList = async () => {
  try {
    const response = await fetch(
      "https://playground.4geeks.com/contact/agendas/danny",
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
      }
    );
    const data = await response.json();
  } catch (error) {
    console.error("Error fetching contact list:", error);
  }
};

const createContact = async () => {
  try {
    const response = await fetch(
      "https://playground.4geeks.com/contact/agendas/danny/contacts",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: "string",
          phone: "",
          email: "",
          address: "",
        }),
      }
    );
    const data = await response.json();
  } catch (error) {
    console.error("Error creating contact:", error);
  }
};

const getContact = async () => {
  try {
    const response = await fetch(
      "https://playground.4geeks.com/contact/agendas/danny/contacts",
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
      }
    );
    const data = await response.json();
  } catch (error) {
    console.log("Error fetching contact:", error);
  }
};

const deleteContact = async () => {
  try {
    const response = await fetch(
      `https://playground.4geeks.com/contact/agendas/danny/contacts/${id}`,
      {
        method: "DELETE",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
      }
    );
    const data = await response.json();
  } catch (error) {
    console.error("Error deleting contact:", error);
  }
};

const updateContact = async () => {
  try {
    const response = await fetch(
      `https://playground.4geeks.com/contact/agendas/danny/contacts/${id}`,
      {
        method: "PUT",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: "string",
          phone: "string",
          email: "string",
          address: "string",
        }),
      }
    );
    const data = await response.json();
  } catch (error) {
    console.log("Error updating contact:", error);
  }
};

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="container-md">
      <div className="ml-auto text-end">
        <Link to="/demo">
          <button className="btn btn-success">
            Add a new Contact +
          </button>
        </Link>
      </div>

      <div className="container-md text-center my-5">
        <Contact
          name="Danny Osorio"
          image="./assets/img/rigo-baby.jpg"
          phone="+34 123 456 789"
          email="daosva97@gmail.com"
          address="Calle de la Libertad, 123, Madrid, España"
        />
      </div>
    </div>
  );
};
