<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <span class="navbar-logo">Glory Akalumhe</span>
        </div>
        <div class="navbar-links">
            <router-link to="/">Home</router-link> 
        </div>
    </nav>
</template>

<script>
export default { 
};
</script>

<style scoped>
.navbar {
    background-color: #f4f4f4;
    color: black;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
}

.navbar-logo {
    font-size: 24px;
    font-weight: bold;
}

.navbar-links {
    display: flex;
}

.navbar-links router-link {
    color: black;
    text-decoration: none;
    margin-right: 15px;
    font-weight: bold;
    cursor: pointer;
}

.navbar-links router-link:hover {
    text-decoration: underline;
}
</style>
