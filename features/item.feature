Feature: Item Feature

  describes an item

  Scenario: Shows loading text when the item is loading
    Given item
    When the item is loading
    Then the 'loading' text is visible

  Scenario: It show a placeholder title when the item has no title
    Given Item
    When the item has no title
    Then it shows 'View item' text

  Scenario: The item has a photo
    Given Item
    When the item has 'dog.png' as image
    Then 'dog.png' is visible

  Scenario: An item has a description
    Given Item
    When the item has a description
    Then the description is shown on the page

  Scenario: An error occured
    Given item
    When the item has an 'not found' error
    Then the message 'not found' is visible