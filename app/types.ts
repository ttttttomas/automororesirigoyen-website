export type Car = {
    ID: string;
    marca: string;
    modelo: string;
    km: string;
    año: number;
    combustible: ['Nafta', 'Diesel', 'Nafta/GNC']; 
    precio: number;
    motor: number;
    carroceria: string;
    aire: boolean;
    puertas: number;
    transmision: ['Manual', 'Automatica'];
    litros: number;
    frenos: boolean;
    airbag: boolean;
    sensor: boolean;
    permuta: boolean;
    traccion: string;
    imagen1: string;
    imagen2: string;
    imagen3: string;
    imagen4: string;
}