const dummy = (blogs) => {
    return 1;
}

const totalLikes = (blogs) => {
    const reducer = (total, blog) => {
        return total + blog.likes;
    }
    return blogs.reduce(reducer, 0);
}

const favoriteBlog = (blogs) => {
    const reducer = (greatest, curr) => {
        return greatest.likes > curr.likes ? greatest : curr;
    }
    const {title, author, likes} = blogs.reduce(reducer, {});
    return {title, author, likes}
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}