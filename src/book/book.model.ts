import { Prisma } from "@prisma/client";


export class Book implements Prisma.BookCreateInput{
     id: string;
     title: string;
     description?: string | null;
}[]