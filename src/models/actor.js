/*
First name
Last name
Birthday
Image
IMDB link
Age (a method that calculates the age based on the birthday)
Create a class (not component) for an Actor.
*/
class actor {
    constructor(_fname,_lname,_image,_IMDBlink,_birthDate)
    {
        this.fname=_fname;
        this.lname=_lname;
        this.image=_image;
        this.IMDBlink=_IMDBlink;
        this.birthDate=_birthDate;
        this.age=this.getAge(_birthDate);
    }
    
        getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);
    
}
export default actor;