// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 *
 *  a. Create a factory Function *(a function that returns an object) called makeContact(id, nameFirst, nameLast)
 *     that returns a contact object.
 *
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *
 *  b. Create a factory Function called makeContactList that returns an Object
 *     that manages contacts. The contact-list object should have the following methods:
 *
 *      1. length(): returns the number of contacts within the list. (the list is `contacts`)
 *      2. addContact(contact): takes a contact object to be added to the
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and
 *         returns the contact object if found in the contacts-list, or,
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should
 *         return a String formated with all the full-names of the separated
 *         with a line-break, like so:
 *
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

function makeContact(id, nameFirst, nameLast) {
  // Solve this function first
  var contact = { id,  nameFirst, nameLast };
  return contact;
}

function makeContactList() {
  /*
   * You need something here to hold contacts. See length api for a hint:
   */
  var contacts = [];

  return {
    // we implemented the length api for you //
    length: function(){
      return contacts.length;
    },
    addContact: function(contact){
    contacts.push(contact);
    },
    findContact: function(fullName){
      for (var i = 0; i < contacts.length; i++) {
        // on each iteration, check the nameFirst, nameLast properties and compare to fullName input
        var checkName = contacts[i].nameFirst + " " + contacts[i].nameLast;
        if (checkName === fullName){
          return contacts[i];
        }
      }
    },
    removeContact: function(contact){
      var index = contacts.indexOf(contact)
      contacts.splice(index, 1);
    },
    printAllContactNames: function(){
      // create variable to hold names
      var allNames = '';
      // for loop to iterate over contacts array and build string of all full names
      for (var i = 0; i < contacts.length; i++) {
        allNames+= contacts[i].nameFirst + ' ' + contacts[i].nameLast;
        // add line break between each name
        if (i < contacts.length -1) {
          allNames += '\n';
        }
      }
      return allNames;
    },

 }
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.makeContact = makeContact;
  module.exports.makeContactList = makeContactList;
}
