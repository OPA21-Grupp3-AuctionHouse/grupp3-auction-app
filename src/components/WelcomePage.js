import Login from "./Login.js"


const WelcomePage = () => {
    return (
        <div class="welcomePage">
            <article>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </article>
            <section class="login">
                <p>
                    Här kommer login att vara.
                </p>
                 <Login />
            </section>
        </div>
    );
};

export default WelcomePage;
