import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const SingleBlogPost = ({ post, setBlogData, userData }) => {
    const user = userData?.find((user) => user._id === post.userId);

    // add like
    const addLike = async () => {
        const fetchResponse = await fetch(
            `http://localhost:3001/api/data/addReaction/${post._id}`,
            {
                method: "PATCH",
            }
        );
        const result = await fetchResponse.json();
        console.log(result);
        setBlogData(result.result);
    };

    // filter by tagname
    const filterByTagName = async (tagname) => {
        const fetchResponse = await fetch(
            `http://localhost:3001/api/data?tag=${tagname}`
        );
        const result = await fetchResponse.json();
        setBlogData(result.result);
    };

    // filter by user name
    const filterByUserID = async (userId) => {
        const fetchResponse = await fetch(
            `http://localhost:3001/api/data?userId=${userId}`
        );
        const result = await fetchResponse.json();
        setBlogData(result.result);
    };

    return (
        <>
            <article>
                <img
                    src={user?.image}
                    alt={`avatar from user ${user?.username}`}
                />
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            </article>
            <article>
                <div>
                    {post.tags?.map((tag) => (
                        <button
                            onClick={(event) =>
                                filterByTagName(event.target.textContent)
                            }
                            key={uuidv4()}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
                <div>
                    <button onClick={addLike}>Like</button>
                    <p>{post.reactions}</p>
                </div>
                <p>
                    author:{" "}
                    <Link onClick={() => filterByUserID(post?.userId)}>
                        <b>{user?.username}</b>
                    </Link>
                </p>
            </article>
        </>
    );
};

export default SingleBlogPost;
