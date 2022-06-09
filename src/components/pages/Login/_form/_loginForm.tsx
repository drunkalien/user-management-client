import { Form, Button } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import * as yup from "yup";

import { useAPIMutation } from "../../../../hooks";

type FormValues = {
  email: String;
  password: String;
};

const schema = yup.object().shape({
  email: yup.string().email().required("Email is required!"),
  password: yup.string().min(1).required("Password is required!"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    // @ts-ignore
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const loginMutation = useAPIMutation({ url: "login" });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const mutation = await loginMutation.mutateAsync(data);
    if (!loginMutation.isLoading && !loginMutation.isError) {
      window.localStorage.setItem("token", mutation.data?.token);
      navigate("/");
    }
  };

  return (
    <Form className="w-25" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label className={errors.email ? "text-danger" : ""}>
          Email
        </Form.Label>
        <Form.Control
          className={errors.email ? "border-danger" : ""}
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
        Don't have an account? <Link to="/signup">Signup</Link>
      </div>

      <div className="w-100 d-flex justify-content-center">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
