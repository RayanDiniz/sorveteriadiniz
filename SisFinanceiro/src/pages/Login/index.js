import React from "react";
import { Form } from "react-bootstrap";

import "./styles.css";

export default function Login() {
  return (
    <>
      <Form class="form-signin">
        <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
        <h1 class="h3 mb-3 font-weight-normal">Faça login</h1>
        <label for="inputEmail" class="sr-only">Email</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email" required autofocus />
        <label for="inputPassword" class="sr-only">Senha</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required />

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" />
                  Lembre-me
          </label>
        </div>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted">&copy;Sorveteria Diniz 2019-2021</p>
      </Form>
    </>
  );
}