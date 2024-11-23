import { useRouter } from "next/router";
import Link from "next/link";
import { useState , useEffect} from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

//import MyComponent from "@/components/MyComponent";

const MyComponent = dynamic(()=>import("@/components/MyComponent"));

export default function User(){
    //const router = useRouter();
    //const { username } = router.query;

    const [count , setCount] = useState(0) ;
    console.log("-count-",count)

    useEffect (() => {
        if (count == 5)
            setCount(0);
        // setCount(count+1);
    },[count])

    return (
        <div>
            <Head>
                <title>User Page</title>
            </Head>
            
            {/* <h1>User Page</h1>
            <h1> Username is : {username}</h1> */}

            <MyComponent title = "Hello,Next.js!"/>

            <Link href='/posts/1234/comments/Welcome!!!'>
                Go to Comment Page
            </Link>

            <p>Count : {count}</p>
            <button onClick={() => setCount(count+1)}>Increment +</button>
            <br/>
            <button onClick={() => setCount(count-1)}>Decrement -</button>
            <br />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-[4px]">
                Click Me
            </button>

        </div>
    )
}