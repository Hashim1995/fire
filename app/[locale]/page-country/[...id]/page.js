import React from "react";
import CountryDetails from "../../components/sections/CountryDetails";
import PageTitle from '../../components/sections/PageTitle'
import { getLocale } from "next-intl/server";
import { returnCurrentLangId } from "../../../../utils/currentLang";

export async function generateMetadata({ params }) {
    const id = params?.id;
    const t = await getLocale();
    const res = await fetch(`https://ivisaapp.azurewebsites.net/api/v1/blog/details?Id=${id}&Language=${returnCurrentLangId(t)}`, {
        method: 'GET'
    });

    if (!res.ok) {
        return null
    }

    const data = await res.json(); // Correctly parsing the JSON data
    const item = data?.data; // Correctly parsing the JSON data
    const keywords = item?.tags?.join(', '); // Assuming tags is an array
    const title = item?.title;
    const description = item?.description;


    return {
        title: title,
        keywords: keywords,
        description: description
    };
}

async function getData(id) {
    const t = await getLocale();
    const res = await fetch(`https://ivisaapp.azurewebsites.net/api/v1/blog/details?Id=${id}&Language=${returnCurrentLangId(t)}`, {
        method: 'GET'
    })
    if (!res.ok) {
        return null
    }
    return res.json()
}



export default async function Home({ params }) {
    const id = params?.id
    const res = await getData(id || 1);
    const data = res?.data
    return (
        <>
            <PageTitle />
            <CountryDetails data={data} />
        </>
    );
}
