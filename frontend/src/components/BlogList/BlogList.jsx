import { useEffect, useState } from "react";

import SingleBlogPost from "../SingleBlogPost/SingleBlogPost";

const BlogList = () => {
    const [blogData, setBlogData] = useState([]);
    const [userData, setUserData] = useState([]);
    console.log("users", userData);
    console.log("posts", blogData);

    // fetch all user data
    useEffect(() => {
        const fetchRequest = async (apiKey) => {
            const fetchResponse = await fetch(apiKey);
            const result = await fetchResponse.json();
            setUserData(result.result);
        };
        fetchRequest("http://localhost:3001/api/userData");
    }, []);

    // fetch blog content
    useEffect(() => {
        const dataFetch = async (apiKey) => {
            const fetchResponse = await fetch(apiKey);
            const result = await fetchResponse.json();
            setBlogData(result.result);
        };
        dataFetch("http://localhost:3001/api/data");
    }, []);

    return (
        <section className="blog-list_wrapper">
            {blogData?.map((post) => (
                <SingleBlogPost
                    key={post._id}
                    post={post}
                    setBlogData={setBlogData}
                    userData={userData}
                />
            ))}
        </section>
    );
};

export default BlogList;
