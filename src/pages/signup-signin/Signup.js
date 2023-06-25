import React, { useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { BiSolidUserDetail } from "react-icons/bi";
import { toast } from "react-toastify";
import { postUser } from "../../helper/axios";

const Signup = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;

    if (confirmPassword !== form.password) {
      return toast.error("Password do not match");
    }

    // call api and send rest obj

    const dataPromise = postUser(rest);

    toast.promise(dataPromise, {
      pending: "Please wait...",
    });

    const { status, message } = await dataPromise;
    toast[status](message);
  };

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      required: true,
      placeholder: "Sam",
      type: "text",
    },
    {
      label: "Last Name",
      name: "lName",
      required: true,
      placeholder: "smith",
      type: "text",
    },
    {
      label: "Phone ",
      name: "phone",

      placeholder: "04123456",
      type: "number",
    },
    {
      label: "Address",
      name: "address",

      placeholder: "222 george st Sydeny",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "Sam@smit.com",
      type: "email",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      placeholder: "******",
      type: "password",
      minLength: "6",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: true,
      placeholder: "******",
      type: "password",
      minLength: "6",
    },
  ];
  return (
    <div>
      <Header />
      <section className="main">
        <Form className="m-5 p-5 border shadow-lg" onSubmit={handleOnSubmit}>
          <h1>
            <BiSolidUserDetail />
            Add New Admin
          </h1>
          <hr />
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Add New Admin
            </Button>
          </div>
        </Form>
      </section>
      <Footer />
    </div>
  );
};

export default Signup;
