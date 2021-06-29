import React from 'react';

function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    <ul>
                        <li><a href="mailto: contact@example.com">contact@example.com</a></li>
                        <li><a href="tel:0000000000">000-000-0000</a></li>
                    </ul>
                </li>
                <li>
                    <h1>useful links</h1>
                    <ul>
                        <li>link 1</li>
                        <li>link 2</li>
                        <li>link 3</li>
                    </ul>
                </li>
                <li>
                    <h1>subscribe for newsletter</h1>
                    <form>
                        <input type="email" placeholder="Enter your email" required />
                        <input type="submit" value="Submit" />
                    </form>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;
