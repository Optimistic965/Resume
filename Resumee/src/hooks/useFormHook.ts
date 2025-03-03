import { useAppDispatch, useAppSelector } from './appHooks/hooks';
import {
    academy,
    address,
    city,
    country,
    dob,
    email,
    fax,
    firstName,
    lastName,
    gender,
    linkedInLink,
    occupation,
    phoneNumber,
    profilePic,
    setState,
    zipcode,
    file,
    clearAcademy
} from '../app/pagesStore/resumeInfo';

export const useFormHook = () => {
    const dispatch = useAppDispatch();
    const resumeInfo = useAppSelector((state) => state.resume);
    const updateProfilePic = (file: file) => {
        dispatch(profilePic(file));
    };
    const updateLinkedInLink = (link: string) => {
        dispatch(linkedInLink(link));
    };
    const updateFirstName = (name: string) => {
        dispatch(firstName(name));
    };
    const updateLastName = (name: string) => {
        dispatch(lastName(name));
    };
    const updateDOB = (date: Date) => {
        dispatch(dob(date.toISOString()));
    };
    const updateOccupation = (job: string) => {
        dispatch(occupation(job));
    };
    const updateGender = (gen: string) => {
        dispatch(gender(gen));
    };
    const updateEmail = (eml: string) => {
        dispatch(email(eml));
    };
    const updatePhoneNumber = (number: string) => {
        dispatch(phoneNumber(number));
    };
    const updateFax = (number: string) => {
        dispatch(fax(number));
    };
    const updateAddress = (addr: string) => {
        dispatch(address(addr));
    };
    const updateCity = (cty: string) => {
        dispatch(city(cty));
    };
    const updateState = (st: string) => {
        dispatch(setState(st));
    };
    const updateCountry = (cou: string) => {
        dispatch(country(cou));
    };
    const updateZipcode = (zip: string) => {
        dispatch(zipcode(zip));
    };
    const addAcademy = (ac: academy[]) => {
        dispatch(clearAcademy())
        ac.forEach(school => dispatch(academy(school)))
    };


    return ({
        resumeInfo,
        updateProfilePic,
        updateLinkedInLink,
        updateFirstName,
        updateLastName,
        updateDOB,
        updateOccupation,
        updateGender,
        updateEmail,
        updatePhoneNumber,
        updateFax,
        updateAddress,
        updateCity,
        updateState,
        updateCountry,
        updateZipcode,
        addAcademy,
    })
}
