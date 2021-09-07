function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year= year;
    this.details = function(){
        console.log('The booke,'+this.title+' '+'was written by :'+this.author+ ' '+'in '+this.year);
    }
}
let book1 = new Book(' Man of the peaple','Achinua Achebe',1870);
let book2 = new Book('Teacher is a king','Kkenny',2014);
const book3 = new Book ('The Alchemist', 'Paulo Coelho', '1988');
