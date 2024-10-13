export interface Dbz {
    items: Item[];
    meta:  Meta[];
    links: Links[]; //next y previous
}

export interface Item {
    id:          number;
    name:        string;
    ki:          string;
    maxKi:       string;
    race:        string;
    gender:      string;
    description: string;
    image:       string;
    affiliation: string;
    deletedAt:   null;
}


export interface Links {
    previous: string;
    next:     string;
}

export interface Meta {
    totalItems:   number;
}