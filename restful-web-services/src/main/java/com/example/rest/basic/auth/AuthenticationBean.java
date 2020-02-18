package com.example.rest.basic.auth;

public class AuthenticationBean {


  private final String message;

  public AuthenticationBean(String message) {
    this.message = message;
  }

  public String getMessage() {
    return message;
  }

  @Override
  public String toString() {
    return "HelloWorldBean{" +
      "message='" + message + '\'' +
      '}';
  }
}