export class Task {
  constructor(
    public title: string,
    public desc: string,
    public date: Date,
    public owner : string ,
    public priority : number,
    public etat : string,
    public categorie :string,

  ) {}
}
