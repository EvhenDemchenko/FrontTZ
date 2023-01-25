export const validateVin = (vin: string) => {
    const re = new RegExp(/^[A-HJ-NPR-Za-hj-npr-z\d]{8}[\dX][A-HJ-NPR-Za-hj-npr-z\d]{2}\d{6}$/);
    return vin.match(re);
}
