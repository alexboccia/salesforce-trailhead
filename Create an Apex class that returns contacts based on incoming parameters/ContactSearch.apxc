public class ContactSearch {
    public static List<Contact> searchForContacts (String lName, String mailPostalCode){
        List<Contact> cont = [SELECT Name 
                              FROM Contact 
                              WHERE (LastName = :lName AND MailingPostalCode = :mailPostalCode)];
        return cont;      
    }
}