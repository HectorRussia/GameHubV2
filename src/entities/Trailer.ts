export interface Trailer {
    id: number;
    name:string;
    preview: string;
    data:{480:string; max: string}
    //data: unknown; 
    // any in ts = no checking becareful
    // ts version last use unknow instead
}

/* this is a temporany solution for us until we find
   the shape of this object ( in doc says data:object) */