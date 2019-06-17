Feature: A user can Login

  All users need to be able to login

  Scenario: We enter a valid user and password
    Given currect user
    When the user enters their username and password
    Then the user is logged in

  Scenario: The user enters an invalid password
    Given Incorrect user
    When the user enters their username and invalid password
    Then the user get a 'access denied' message