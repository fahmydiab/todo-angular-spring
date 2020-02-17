package com.example.rest.webservice.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;

//    {
//    	"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU4MjU2MjIzMiwiaWF0IjoxNTgxOTU3NDMyfQ.FrWbOpKgBGWhc48fvqvzJSd5vgena42xXEr8blJii5pByHmNp0cFPJJU1RROFnaCfq54hjDTilNNtR5i03j05A"
//    	}
    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

