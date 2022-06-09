import { Form, Button } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router";

import { useAPIMutation } from "../../../../hooks";
import { Link } from "react-router-dom";

type FormValues = {
  name: String;
  email: String;
  password: String;
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  email: yup.string().email().required("Email is required!"),
  password: yup.string().min(1).required("Password is required!"),
});

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues | any>({
    resolver: yupResolver<any>(schema),
  });
  const navigate = useNavigate();
  const signupMutation = useAPIMutation({ url: "/signup" });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const mutation = await signupMutation.mutateAsync(data);
    if (!signupMutation.isLoading && !signupMutation.isError) {
      window.localStorage.setItem("token", mutation.data?.token);
      navigate("/");
    }
  };

  return (
    <Form className="w-25" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label className={errors.name ? "text-danger" : ""}>
          Name
        </Form.Label>
        <Form.Control
          className={errors.name ? "border-danger" : ""}
          type="text"
          {...register("name")}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label className={errors.emial ? "text-danger" : ""}>
          Email
        </Form.Label>
        <Form.Control
          className={errors.emial ? "border-danger" : ""}
          type="email"
          {...register("email")}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label className={errors.password ? "text-danger" : ""}>
          Password
        </Form.Label>
        <Form.Control
          className={errors.password ? "border-danger" : ""}
          type="password"
          {...register("password")}
        />
      </Form.Group>
      <div className="mb-3">
        Already have an account? <Link to="/login">Login</Link>
      </div>
      <div className="w-100 d-flex justify-content-center">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default SignupForm;
