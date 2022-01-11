const emails = ["nico@naver.com", "nico@naver.com", "moon@gmail.com", "nico@google.com"]

// const foundMail = email.find(item => item.includes("gmail"));
// console.log(foundMail);

// const noGmail = emails.filter(email => !email.includes("gmail"));
// console.log(noGmail);

const cleaned = emails.map((email, index) => ({
    username: email.split("@")[0],
    index,
}));
console.log(cleaned)