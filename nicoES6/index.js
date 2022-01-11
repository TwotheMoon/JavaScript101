const styled = (aElement) => {
    const el = document.createElement(aElement);
    return args => {
        const styles = args[0];
        el.style = styles;
        return el;
    }
};

const title = styled("h1")`
    border-radius: 10px;
    color: blue;
`;

const subtitle = styled("span")`
    color: red;
`;

title.innerText = "We just cloned";
subtitle.innerText = "styled";

document.body.append(title, subtitle);