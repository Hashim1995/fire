import React from "react";
import PageTitle from "../../components/sections/PageTitle";
import BlogDetails from "../../components/sections/BlogDetails";
import { getLocale } from "next-intl/server";
import { returnCurrentLangId } from "../../../../utils/currentLang";
import bg from '../../../../public/images/blog-bg.jpg'
import Page404 from "../../components/sections/Page404";

export async function generateMetadata({ params }) {
    const id = params['slug]&[...id'][1];
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

export default async function NewsDetail({ params }) {
    const id = params['slug]&[...id'][1]

    const res = await getData(id || 1);
    const data = res?.data

    return (
        <>
            <PageTitle bg={bg} title={data?.title} />
            {data ? <BlogDetails item={data} /> : <Page404 />}
        </>
    );
}