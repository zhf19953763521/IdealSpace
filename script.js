// ==================== DOM 元素 ====================
const btnPost = document.getElementById('btnPost');
const postModal = document.getElementById('postModal');
const closeModal = document.getElementById('closeModal');
const cancelPost = document.getElementById('cancelPost');
const likeBtns = document.querySelectorAll('.like-btn');
const navItems = document.querySelectorAll('.nav-item');
const searchInput = document.querySelector('.search-input');

// ==================== 登录弹窗 ====================
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeLogin = document.getElementById('closeLogin');
const confirmLogin = document.getElementById('confirmLogin');
const loginAccount = document.getElementById('loginAccount');
const loginPassword = document.getElementById('loginPassword');

function openLoginModal() {
    loginModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLoginModalHandler() {
    loginModal.classList.remove('active');
    document.body.style.overflow = '';
    loginAccount.value = '';
    loginPassword.value = '';
}

loginBtn.addEventListener('click', openLoginModal);
closeLogin.addEventListener('click', closeLoginModalHandler);

loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        closeLoginModalHandler();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && loginModal.classList.contains('active')) {
        closeLoginModalHandler();
    }
});

confirmLogin.addEventListener('click', function() {
    const account = loginAccount.value.trim();
    const password = loginPassword.value.trim();

    if (!account || !password) {
        alert('请填写账号和密码哦~ (｡•́︿•̀｡)');
        return;
    }

    alert('登录成功！🌸');
    closeLoginModalHandler();
});

// ==================== 发帖弹窗 ====================
function openModal() {
    postModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModalHandler() {
    postModal.classList.remove('active');
    document.body.style.overflow = '';
}

btnPost.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalHandler);
cancelPost.addEventListener('click', closeModalHandler);

// 点击背景关闭
postModal.addEventListener('click', (e) => {
    if (e.target === postModal) {
        closeModalHandler();
    }
});

// ESC 键关闭
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && postModal.classList.contains('active')) {
        closeModalHandler();
    }
});

// ==================== 点赞功能 ====================
likeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const countEl = this.querySelector('.action-count');
        const isLiked = this.classList.contains('liked');

        if (isLiked) {
            this.classList.remove('liked');
            countEl.textContent = parseInt(countEl.textContent) - 1;
        } else {
            this.classList.add('liked');
            countEl.textContent = parseInt(countEl.textContent) + 1;
        }
    });
});

// ==================== 导航切换 ====================
navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        navItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// ==================== 搜索功能 ====================
let searchTimeout;
searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        if (this.value.trim()) {
            console.log('搜索:', this.value);
        }
    }, 500);
});

// ==================== 滚动视差效果 ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const stars = document.querySelectorAll('.star');
    const clouds = document.querySelectorAll('.cloud');

    stars.forEach((star, index) => {
        const speed = 0.1 + (index * 0.05);
        star.style.transform = `translateY(${scrolled * speed}px)`;
    });

    clouds.forEach((cloud, index) => {
        const speed = 0.05 + (index * 0.02);
        cloud.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==================== 帖子图片点击 ====================
const postImages = document.querySelectorAll('.post-img');
postImages.forEach(img => {
    img.addEventListener('click', function() {
        this.style.transform = this.style.transform === 'scale(1.1)' ? 'scale(1)' : 'scale(1.1)';
    });
});

// ==================== 发布帖子 ====================
const postTitleInput = document.querySelector('.post-title-input');
const postContentInput = document.querySelector('.post-content-input');
const btnSubmit = document.querySelector('.btn-submit');

btnSubmit.addEventListener('click', function() {
    const title = postTitleInput.value.trim();
    const content = postContentInput.value.trim();

    if (!title || !content) {
        alert('请填写标题和内容哦~ (｡•́︿•̀｡)');
        return;
    }

    // 模拟发布成功
    alert('发布成功！期待你的精彩内容~ 🌸');
    postTitleInput.value = '';
    postContentInput.value = '';
    closeModalHandler();
});

// ==================== 标签点击效果 ====================
const tags = document.querySelectorAll('.tag');
tags.forEach(tag => {
    tag.addEventListener('click', function() {
        console.log('查看标签:', this.textContent);
    });
});

// ==================== 关注按钮 ====================
const btnFollow = document.querySelector('.btn-follow');
if (btnFollow) {
    btnFollow.addEventListener('click', function() {
        if (this.textContent.includes('关注')) {
            this.textContent = '✓ 已关注';
            this.style.background = 'var(--gradient-purple)';
        } else {
            this.textContent = '+ 关注';
            this.style.background = 'var(--gradient-pink)';
        }
    });
}

// ==================== 初始化 ====================
console.log('🌸 小樱の秘密基地 已加载完成！');
