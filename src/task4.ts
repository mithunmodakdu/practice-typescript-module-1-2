//:::: Create union and intersection types using interfaces ::::
interface Book {
  title: string;
  author: string;
  pages: number;
  price: number;
}
interface Magazine{
  title: string;
  issueNumber: number;
  month: string;


}

type ReadAble = Book | Magazine;
type Bookazine = Book & Magazine;

const readable : ReadAble ={
  title: 'TypeScript Baics',
  author: 'John Doe',
  pages: 120,
  price: 320
}

const bookazine : Bookazine ={
  title: 'Hybrid Read',
  author: 'John Smith',
  pages: 300,
  price: 500,
  issueNumber: 30,
  month: 'april'
}