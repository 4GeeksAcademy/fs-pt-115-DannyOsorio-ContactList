import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Edit = () => {

  return (
    <div className="container-md my-5">
      <h1 className="text-center">Edit Contact</h1>
      <form>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Full Name"
          />
        </div>
        <div className="mb-3">
          <label for="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter Address"
          />
        </div>
        <div className="mb-3">
          <label for="phone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            placeholder="Enter Phone"
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
          />
        </div>
        <button type="submit" className="btn btn-primary w-50">
          Save
        </button>
        <Link to="/">
        <button className="btn btn-danger w-50">
          Cancel
        </button>
        </Link>
      </form>
    </div>
  );
};
