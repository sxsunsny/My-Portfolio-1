// Application JavaScript for Rabbit & Fox Portfolio

document.addEventListener("DOMContentLoaded", () => {
  // ================= STATE MANAGEMENT =================
  let state = {
    currentUser: null,
    items: [], // Array of portfolio/summary items
    selectedFolder: null, // Active folder filter (null = all)
    currentView: "home", // home, add, profile
    currentFilterType: "all", // all, portfolio, summary
  };

  // Default initial seed data (Zootopia themed) to display beautiful portfolios immediately
  const DEFAULT_SEED_ITEMS = [
    {
      id: "seed-1",
      username: "admin",
      type: "portfolio",
      title: "ประกาศนียบัตรผู้ช่วยเจ้าหน้าที่ตำรวจจูเนียร์",
      folder: "เกียรติบัตรและรางวัล",
      date: "2026-05-12",
      description: "สำเร็จการฝึกอบรมผู้ช่วยตำรวจรุ่นเยาว์รุ่นแรกของสถานีตำรวจจูโทเปีย (ZPD) ภายใต้การดูแลของเจ้าหน้าที่จูดี้ ฮอปส์ ได้เรียนรู้การสังเกตการณ์และการช่วยเหลือชุมชนเบื้องต้น",
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=60", // Colorful gradient/illustration background
      sticker: "badge"
    },
    {
      id: "seed-2",
      username: "admin",
      type: "summary",
      title: "สรุปชีววิทยา: การปรับตัวของสัตว์เลี้ยงลูกด้วยนม",
      folder: "ชีววิทยาแสนสนุก",
      date: "2026-06-10",
      subjectCode: "BIO202",
      description: "สรุปการปรับตัวทางกายภาพของสัตว์เลี้ยงลูกด้วยนมในเขตภูมิอากาศต่างๆ ของจูโทเปีย เช่น การสลายความร้อนของสุนัขจิ้งจอกในทะเลทรายซาฮารา (Sahara Square) และหนาชั้นไขมันของหมีขั้วโลกในทุนดราทาวน์ (Tundratown)",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60",
      sticker: "carrot"
    },
    {
      id: "seed-3",
      username: "admin",
      type: "portfolio",
      title: "จิตอาสาแจกไอติม Pawpsicle ยักษ์ในลิตเติลโรเดนเชีย",
      folder: "กิจกรรมเพื่อสังคม",
      date: "2026-04-20",
      description: "ร่วมมือกับร้านไอติมของนิค ไวลด์ นำไอติม Pawpsicle มาละลายและป้อนให้กับเพื่อนหนูตัวจิ๋วในเมือง Little Rodentia ช่วยดับร้อนและสร้างความสามัคคีให้สัตว์ต่างสายพันธุ์",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&auto=format&fit=crop&q=60",
      sticker: "paw"
    },
    {
      id: "seed-4",
      username: "admin",
      type: "summary",
      title: "วิชาสถิติเบื้องต้น: การคำนวณการใช้ประชากรแครอท",
      folder: "คณิตศาสตร์และสถิติ",
      date: "2026-05-30",
      subjectCode: "STAT101",
      description: "ทฤษฎีความน่าจะเป็นและการเก็บข้อมูลเชิงสถิติเปรียบเทียบผลผลิตแครอทในฟาร์ม Bunnyburrow กับความต้องการบริโภคประชากรในโซน Downtown Zootopia สูตรที่ใช้: Mean, Standard Deviation",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=60",
      sticker: "hearts"
    }
  ];

  // ================= ELEMENTS SELECTORS =================
  const dom = {
    authGate: document.getElementById("auth-gate"),
    appContainer: document.getElementById("app-container"),
    
    // Auth Forms
    loginForm: document.getElementById("login-form"),
    registerForm: document.getElementById("register-form"),
    switchToRegister: document.getElementById("switchToRegister") || document.getElementById("switch-to-register"),
    switchToLogin: document.getElementById("switchToLogin") || document.getElementById("switch-to-login"),
    
    // Nav Items
    desktopNavItems: document.querySelectorAll(".desktop-nav .nav-item"),
    mobileNavItems: document.querySelectorAll(".mobile-nav-bar .mobile-nav-item"),
    
    // Pages / Views
    views: document.querySelectorAll(".page-view"),
    
    // Home View Elements
    filterTabs: document.querySelectorAll(".filter-tab"),
    foldersContainer: document.getElementById("folders-container"),
    itemsContainer: document.getElementById("items-container"),
    itemsGridTitle: document.getElementById("items-grid-title"),
    btnBackFoldersList: document.getElementById("btn-back-folders-list"),
    emptyStateView: document.getElementById("empty-state-view"),
    searchInput: document.getElementById("search-input"),
    btnSearchTrigger: document.getElementById("btn-search-trigger"),
    
    // Add View Elements
    addItemForm: document.getElementById("add-item-form"),
    typeRadioLabels: document.querySelectorAll(".type-radio-label"),
    addTitle: document.getElementById("add-title"),
    labelTitleText: document.getElementById("label-title-text"),
    addFolderSelect: document.getElementById("add-folder-select"),
    addFolderNew: document.getElementById("add-folder-new"),
    colSubjectCode: document.getElementById("col-subject-code"),
    addSubjectCode: document.getElementById("add-subject-code"),
    addDate: document.getElementById("add-date"),
    addDescription: document.getElementById("add-description"),
    stickerOptions: document.querySelectorAll(".sticker-option"),
    polaroidUploadArea: document.getElementById("polaroid-upload-area"),
    imageUploadInput: document.getElementById("image-upload-input"),
    uploadPlaceholder: document.getElementById("upload-placeholder"),
    uploadImgPreview: document.getElementById("upload-img-preview"),
    uploadStickerOverlay: document.getElementById("upload-sticker-overlay"),
    
    // Profile View Elements
    profileDisplayName: document.getElementById("profile-display-name"),
    profileUsernameTag: document.getElementById("profile-username-tag"),
    profileBioText: document.getElementById("profile-bio-text"),
    profileBioEdit: document.getElementById("profile-bio-edit"),
    btnEditProfile: document.getElementById("btn-edit-profile"),
    btnSaveProfile: document.getElementById("btn-save-profile"),
    btnLogoutProfile: document.getElementById("btn-logout-profile"),
    btnLogoutDesktop: document.getElementById("btn-logout-desktop"),
    
    // Stats Count
    countFolders: document.getElementById("count-folders"),
    countPortfolios: document.getElementById("count-portfolios"),
    countSummaries: document.getElementById("count-summaries"),
    headerUsernameText: document.getElementById("header-username-text"),
    headerAvatar: document.getElementById("header-avatar"),
    profileAvatarBig: document.getElementById("profile-avatar-big"),
    btnEditAvatarTrigger: document.getElementById("btn-edit-avatar-trigger"),
    avatarPickerModal: document.getElementById("avatar-picker-modal"),
    
    // Detail Modal Elements
    detailModal: document.getElementById("detail-modal"),
    modalCloseTrigger: document.getElementById("modal-close-trigger"),
    modalImg: document.getElementById("modal-img"),
    modalStickerOverlay: document.getElementById("modal-sticker-overlay"),
    btnModalDownload: document.getElementById("btn-modal-download"),
    modalTag: document.getElementById("modal-tag"),
    modalDate: document.getElementById("modal-date"),
    modalSubjectCode: document.getElementById("modal-subject-code"),
    modalTitle: document.getElementById("modal-title"),
    modalDesc: document.getElementById("modal-desc")
  };

  // ================= INJECT VECTOR SVGS =================
  const injectSVGs = () => {
    // Inject logic icons
    const svgMap = [
      { id: "auth-logo-svg", asset: "logo" },
      { id: "header-logo-svg", asset: "logo" },
      { id: "d-nav-home", asset: "home" },
      { id: "d-nav-add", asset: "add" },
      { id: "d-nav-profile", asset: "profile" },
      { id: "m-nav-home", asset: "home" },
      { id: "m-nav-add", asset: "add" },
      { id: "m-nav-profile", asset: "profile" },
      { id: "hero-search-icon", asset: "search" },
      { id: "btn-logout-desktop", asset: "logout" },
      { id: "hero-heart-badge", asset: "hearts" },
      { id: "hero-overlap-sticker", asset: "badge" },
      { id: "badge-row-1", asset: "carrot" },
      { id: "badge-row-2", asset: "badge" },
      { id: "badge-row-3", asset: "paw" },
      { id: "icon-folder-title", asset: "folder" },
      { id: "icon-items-title", asset: "summary" },
      { id: "upload-icon-main", asset: "add" },
      { id: "empty-carrot-sticker", asset: "carrot" },
      // Sticker choices in add form
      { id: "preview-sticker-carrot", asset: "carrot" },
      { id: "preview-sticker-badge", asset: "badge" },
      { id: "preview-sticker-paw", asset: "paw" },
      { id: "preview-sticker-hearts", asset: "hearts" },
      // Avatar options in profile
      { id: "choice-judy", asset: "judy" },
      { id: "choice-nick", asset: "nick" },
      { id: "choice-carrot", asset: "carrot" },
      { id: "choice-badge", asset: "badge" }
    ];

    svgMap.forEach(item => {
      const el = document.getElementById(item.id);
      if (el && window.SVG_ASSETS[item.asset]) {
        el.innerHTML = window.SVG_ASSETS[item.asset];
      }
    });
  };

  // ================= ROUTING & SCREEN SYSTEM =================
  const navigateTo = (viewName) => {
    state.currentView = viewName;
    
    // Hide all views, display the selected one
    dom.views.forEach(view => {
      view.classList.remove("active");
      if (view.id === `view-${viewName}`) {
        view.classList.add("active");
      }
    });

    // Update active nav items (both Desktop & Mobile)
    const updateNavClasses = (navElements) => {
      navElements.forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("data-target") === viewName) {
          item.classList.add("active");
        }
      });
    };

    updateNavClasses(dom.desktopNavItems);
    updateNavClasses(dom.mobileNavItems);

    // Dynamic headers based on navigation
    const heroBanner = document.getElementById("hero-banner");
    if (viewName === "home") {
      heroBanner.classList.remove("hidden");
      renderFolders();
      renderItems();
    } else {
      heroBanner.classList.add("hidden");
    }

    if (viewName === "profile") {
      updateProfileStats();
    }
  };

  // Attach nav click handlers
  const initNavigation = () => {
    const bindNavClick = (navItems) => {
      navItems.forEach(item => {
        item.addEventListener("click", () => {
          const target = item.getAttribute("data-target");
          navigateTo(target);
        });
      });
    };

    bindNavClick(dom.desktopNavItems);
    bindNavClick(dom.mobileNavItems);
  };

  // ================= AUTHENTICATION LOGIC =================
  const checkAuthStatus = () => {
    const userJson = localStorage.getItem("currentUser");
    if (userJson) {
      state.currentUser = JSON.parse(userJson);
      loadUserData();
      dom.authGate.classList.add("hidden");
      dom.appContainer.classList.remove("hidden");
      navigateTo("home");
    } else {
      dom.authGate.classList.remove("hidden");
      dom.appContainer.classList.add("hidden");
    }
  };

  const loadUserData = () => {
    // Load portfolio items
    const allItems = JSON.parse(localStorage.getItem("scrapbookItems") || "[]");
    state.items = allItems.filter(item => item.username === state.currentUser.username);

    // If a fresh new admin/user is logged in, seed with default gorgeous data
    if (state.items.length === 0 && state.currentUser.username === "admin") {
      state.items = [...DEFAULT_SEED_ITEMS];
      localStorage.setItem("scrapbookItems", JSON.stringify(state.items));
    }

    // Set layout texts
    dom.headerUsernameText.textContent = state.currentUser.name || state.currentUser.username;
    dom.profileDisplayName.textContent = state.currentUser.name || state.currentUser.username;
    dom.profileUsernameTag.textContent = state.currentUser.username;
    dom.profileBioText.textContent = state.currentUser.bio || "ยินดีต้อนรับสู่พอร์ตโฟลิโอสะสมผลงานแสนน่ารัก!";
    
    // Set avatars
    updateAvatarsDOM();
    populateFolderDropdown();
  };

  const updateAvatarsDOM = () => {
    const avatarKey = state.currentUser.avatar || "judy";
    if (window.SVG_ASSETS[avatarKey]) {
      dom.headerAvatar.innerHTML = window.SVG_ASSETS[avatarKey];
      dom.profileAvatarBig.innerHTML = window.SVG_ASSETS[avatarKey];
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const username = document.getElementById("login-username").value.trim().toLowerCase();
    const password = document.getElementById("login-password").value;

    const users = JSON.parse(localStorage.getItem("scrapbookUsers") || "[]");
    
    // Seed default admin account if not exists
    let user = users.find(u => u.username === username);
    if (!user && username === "admin" && password === "admin") {
      user = { username: "admin", password: "admin", name: "Judy & Nick", bio: "Anyone can be anything! ยินดีต้อนรับสู่พอร์ตโฟลิโอแสนอบอุ่น ที่รวบรวมผลงานและสรุปบทเรียนไว้ในแบบของพวกเรา!", avatar: "judy" };
      users.push(user);
      localStorage.setItem("scrapbookUsers", JSON.stringify(users));
    }

    if (user && user.password === password) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      checkAuthStatus();
      dom.loginForm.reset();
    } else {
      alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง (ใบใบ้: ลองใช้ admin / admin)");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = document.getElementById("register-name").value.trim();
    const username = document.getElementById("register-username").value.trim().toLowerCase();
    const password = document.getElementById("register-password").value;

    const users = JSON.parse(localStorage.getItem("scrapbookUsers") || "[]");
    
    if (users.some(u => u.username === username)) {
      alert("ชื่อผู้ใช้งานนี้ถูกใช้ไปแล้ว!");
      return;
    }

    const newUser = {
      username,
      password,
      name,
      bio: `ยินดีต้อนรับสู่พอร์ตโฟลิโอสะสมผลงานของ ${name}!`,
      avatar: "nick"
    };

    users.push(newUser);
    localStorage.setItem("scrapbookUsers", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    checkAuthStatus();
    dom.registerForm.reset();
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    state.currentUser = null;
    state.items = [];
    state.selectedFolder = null;
    checkAuthStatus();
  };

  // Auth switch actions
  dom.switchToRegister.addEventListener("click", (e) => {
    e.preventDefault();
    dom.loginForm.classList.add("hidden");
    dom.registerForm.classList.remove("hidden");
  });

  dom.switchToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    dom.registerForm.classList.add("hidden");
    dom.loginForm.classList.remove("hidden");
  });

  dom.loginForm.addEventListener("submit", handleLogin);
  dom.registerForm.addEventListener("submit", handleRegister);
  dom.btnLogoutProfile.addEventListener("click", handleLogout);
  dom.btnLogoutDesktop.addEventListener("click", handleLogout);

  // ================= HOME PAGE DATA RENDERING =================
  
  // Filter tabs click (All / Portfolio / Summary)
  dom.filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      dom.filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.currentFilterType = tab.getAttribute("data-type");
      state.selectedFolder = null; // Reset folder selection when filter changes
      dom.btnBackFoldersList.classList.add("hidden");
      dom.itemsGridTitle.innerHTML = `<span class="title-icon">${window.SVG_ASSETS.summary}</span> รายการบันทึกทั้งหมด`;
      renderFolders();
      renderItems();
    });
  });

  const getFilteredItems = () => {
    let list = state.items;
    
    // Filter type (portfolio / summary)
    if (state.currentFilterType !== "all") {
      list = list.filter(item => item.type === state.currentFilterType);
    }
    
    // Filter folder
    if (state.selectedFolder) {
      list = list.filter(item => item.folder === state.selectedFolder);
    }

    // Filter Search
    const searchVal = dom.searchInput.value.trim().toLowerCase();
    if (searchVal) {
      list = list.filter(item => 
        item.title.toLowerCase().includes(searchVal) ||
        item.folder.toLowerCase().includes(searchVal) ||
        item.description.toLowerCase().includes(searchVal) ||
        (item.subjectCode && item.subjectCode.toLowerCase().includes(searchVal))
      );
    }

    return list;
  };

  const renderFolders = () => {
    dom.foldersContainer.innerHTML = "";
    
    // Calculate folder statistics
    const foldersMap = {};
    const itemsForFolderStats = state.currentFilterType === "all" ? 
      state.items : state.items.filter(i => i.type === state.currentFilterType);
      
    itemsForFolderStats.forEach(item => {
      if (!foldersMap[item.folder]) {
        foldersMap[item.folder] = { count: 0, type: item.type };
      }
      foldersMap[item.folder].count++;
    });

    const uniqueFolders = Object.keys(foldersMap);

    if (uniqueFolders.length === 0) {
      dom.foldersContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-sub); font-style: italic;">ยังไม่มีโฟลเดอร์ในหมวดนี้</p>`;
      return;
    }

    uniqueFolders.forEach(folderName => {
      const folderInfo = foldersMap[folderName];
      const folderCard = document.createElement("div");
      folderCard.className = `folder-card folder-type-${folderInfo.type} ${state.selectedFolder === folderName ? "selected" : ""}`;
      
      const iconSVG = folderInfo.type === "portfolio" ? window.SVG_ASSETS.folder : window.SVG_ASSETS.summary;

      folderCard.innerHTML = `
        <div class="folder-card-icon">${iconSVG}</div>
        <div class="folder-name">${escapeHTML(folderName)}</div>
        <div class="folder-count">${folderInfo.count} บันทึก</div>
      `;

      folderCard.addEventListener("click", () => {
        if (state.selectedFolder === folderName) {
          state.selectedFolder = null;
          folderCard.classList.remove("selected");
          dom.btnBackFoldersList.classList.add("hidden");
          dom.itemsGridTitle.innerHTML = `<span class="title-icon">${window.SVG_ASSETS.summary}</span> รายการบันทึกทั้งหมด`;
        } else {
          state.selectedFolder = folderName;
          renderFolders(); // Rerender to show select state
          dom.btnBackFoldersList.classList.remove("hidden");
          dom.itemsGridTitle.innerHTML = `<span class="title-icon">${window.SVG_ASSETS.folder}</span> โฟลเดอร์: ${escapeHTML(folderName)}`;
        }
        renderItems();
      });

      dom.foldersContainer.appendChild(folderCard);
    });
  };

  const renderItems = () => {
    dom.itemsContainer.innerHTML = "";
    const filteredItems = getFilteredItems();

    if (filteredItems.length === 0) {
      dom.emptyStateView.classList.remove("hidden");
      dom.itemsContainer.classList.add("hidden");
      return;
    }

    dom.emptyStateView.classList.add("hidden");
    dom.itemsContainer.classList.remove("hidden");

    filteredItems.forEach(item => {
      const card = document.createElement("div");
      card.className = "polaroid-card";

      // Date parsing formatting
      const dateFormatted = new Date(item.date).toLocaleDateString("th-TH", {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });

      // Sticker drawing
      const stickerSVG = window.SVG_ASSETS[item.sticker] || "";

      card.innerHTML = `
        <div class="polaroid-tape"></div>
        <div class="polaroid-img-box">
          <img src="${escapeHTML(item.image || 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800')}" alt="${escapeHTML(item.title)}" class="polaroid-img">
          ${stickerSVG ? `<div class="polaroid-sticker">${stickerSVG}</div>` : ""}
        </div>
        <div class="polaroid-desc-box">
          <div>
            <div class="polaroid-tag-row">
              <span class="card-tag ${item.type === 'portfolio' ? 'tag-portfolio' : 'tag-summary'}">
                ${item.type === 'portfolio' ? 'ผลงาน' : 'สรุปรายวิชา'}
              </span>
              <span class="card-date">${dateFormatted}</span>
            </div>
            ${item.type === 'summary' && item.subjectCode ? `<div class="card-subject-code">${escapeHTML(item.subjectCode)}</div>` : ""}
            <h3 class="card-title">${escapeHTML(item.title)}</h3>
            <p class="card-text">${escapeHTML(item.description)}</p>
          </div>
          <div class="card-footer-buttons">
            <button class="btn-view-card" title="ดูรายละเอียดเพิ่มเติม">🔍 ดูเพิ่มเติม</button>
            <button class="btn-delete-card" data-id="${item.id}" title="ลบออกจากสมุดบันทึก">🗑️ ลบ</button>
          </div>
        </div>
      `;

      // Attach Delete button handler
      card.querySelector(".btn-delete-card").addEventListener("click", (e) => {
        e.stopPropagation();
        const idToDelete = e.target.getAttribute("data-id");
        if (confirm(`คุณต้องการลบ "${item.title}" หรือไม่?`)) {
          deleteItem(idToDelete);
        }
      });

      // Click card to open detail modal
      card.addEventListener("click", () => {
        openDetailModal(item);
      });

      dom.itemsContainer.appendChild(card);
    });
  };

  const deleteItem = (id) => {
    // Delete in state
    state.items = state.items.filter(item => item.id !== id);
    
    // Save to localStorage
    const allStoredItems = JSON.parse(localStorage.getItem("scrapbookItems") || "[]");
    const updatedStored = allStoredItems.filter(item => !(item.id === id && item.username === state.currentUser.username));
    localStorage.setItem("scrapbookItems", JSON.stringify(updatedStored));
    
    // Refresh GUI
    renderFolders();
    renderItems();
    populateFolderDropdown();
  };

  // ================= DETAIL MODAL LOGIC =================
  let modalActiveItem = null;

  const openDetailModal = (item) => {
    modalActiveItem = item;
    
    // Set text and image
    dom.modalImg.src = item.image || 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800';
    dom.modalImg.alt = item.title;
    dom.modalTitle.textContent = item.title;
    dom.modalDesc.textContent = item.description;

    // Date formatting
    const dateFormatted = new Date(item.date).toLocaleDateString("th-TH", {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    dom.modalDate.textContent = dateFormatted;

    // Tag configuration
    if (item.type === 'portfolio') {
      dom.modalTag.textContent = 'ผลงาน (Portfolio)';
      dom.modalTag.className = 'card-tag tag-portfolio';
      dom.modalSubjectCode.classList.add('hidden');
    } else {
      dom.modalTag.textContent = 'สรุปรายวิชา (Summary)';
      dom.modalTag.className = 'card-tag tag-summary';
      if (item.subjectCode) {
        dom.modalSubjectCode.textContent = item.subjectCode;
        dom.modalSubjectCode.classList.remove('hidden');
      } else {
        dom.modalSubjectCode.classList.add('hidden');
      }
    }

    // Sticker overlay drawing
    const stickerSVG = window.SVG_ASSETS[item.sticker] || "";
    if (stickerSVG) {
      dom.modalStickerOverlay.innerHTML = stickerSVG;
      dom.modalStickerOverlay.classList.remove('hidden');
    } else {
      dom.modalStickerOverlay.classList.add('hidden');
    }

    // Show modal
    dom.detailModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Disable background scrolling
  };

  const closeDetailModal = () => {
    dom.detailModal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
    modalActiveItem = null;
  };

  // Download logic function
  const triggerImageDownload = async () => {
    if (!modalActiveItem) return;
    
    const imgUrl = modalActiveItem.image;
    const cleanTitle = modalActiveItem.title.replace(/[^a-zA-Z0-9\u0E00-\u0E7F\s-_]/g, '').trim() || 'image';
    const filename = `${cleanTitle}-${modalActiveItem.date}.png`;

    try {
      if (imgUrl.startsWith('data:')) {
        // Local base64 image download
        const link = document.createElement('a');
        link.href = imgUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // Seed remote images (e.g. Unsplash) - fetch as blob to avoid browser navigating
        const response = await fetch(imgUrl);
        if (!response.ok) throw new Error('Network error');
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename.replace('.png', '.jpg'); // Unsplash usually JPEG
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      }
    } catch (err) {
      // Fallback: Open URL in new window/tab for manual saving if CORS fails
      console.warn('Direct blob download failed (possibly CORS issue on Unsplash URL). Opening in new window.', err);
      window.open(imgUrl, '_blank');
    }
  };

  // Bind close and download events
  dom.modalCloseTrigger.addEventListener("click", closeDetailModal);
  dom.btnModalDownload.addEventListener("click", triggerImageDownload);

  // Close on backdrop click
  dom.detailModal.addEventListener("click", (e) => {
    if (e.target === dom.detailModal) {
      closeDetailModal();
    }
  });

  // Close on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !dom.detailModal.classList.contains("hidden")) {
      closeDetailModal();
    }
  });

  // Back button from active folder detail
  dom.btnBackFoldersList.addEventListener("click", () => {
    state.selectedFolder = null;
    dom.btnBackFoldersList.classList.add("hidden");
    dom.itemsGridTitle.innerHTML = `<span class="title-icon">${window.SVG_ASSETS.summary}</span> รายการบันทึกทั้งหมด`;
    renderFolders();
    renderItems();
  });

  // Search logic triggers
  dom.btnSearchTrigger.addEventListener("click", () => {
    renderFolders();
    renderItems();
  });

  dom.searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      renderFolders();
      renderItems();
    }
  });

  // ================= ADD NEW ITEM SCREEN LOGIC =================
  
  // Toggle Portfolio / Summary form type
  dom.typeRadioLabels.forEach(label => {
    label.addEventListener("click", () => {
      dom.typeRadioLabels.forEach(l => l.classList.remove("active"));
      label.classList.add("active");
      
      const input = label.querySelector("input");
      const value = input.value;
      
      if (value === "summary") {
        dom.colSubjectCode.classList.remove("hidden");
        dom.labelTitleText.textContent = "ชื่อหัวข้อสรุปรายวิชา";
        dom.addTitle.placeholder = "เช่น สรุปโครงสร้างพืช ม.6, สรุปประวัติศาสตร์ยุโรป";
      } else {
        dom.colSubjectCode.classList.add("hidden");
        dom.labelTitleText.textContent = "ชื่อผลงาน / กิจกรรม";
        dom.addTitle.placeholder = "เช่น ประกวดวาดภาพระดับจังหวัด, กิจกรรมค่ายจิตอาสา";
        dom.addSubjectCode.value = "";
      }
      populateFolderDropdown();
    });
  });

  // Sticker option selectors
  dom.stickerOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      dom.stickerOptions.forEach(o => o.classList.remove("active"));
      opt.classList.add("active");
      const stickerVal = opt.querySelector("input").value;
      
      // Update preview sticker overlap
      if (dom.uploadImgPreview.classList.contains("hidden")) return;
      
      if (window.SVG_ASSETS[stickerVal]) {
        dom.uploadStickerOverlay.innerHTML = window.SVG_ASSETS[stickerVal];
        dom.uploadStickerOverlay.classList.remove("hidden");
      } else {
        dom.uploadStickerOverlay.classList.add("hidden");
      }
    });
  });

  // Folder options logic dropdown
  const populateFolderDropdown = () => {
    const activeType = document.querySelector('input[name="item-type"]:checked').value;
    dom.addFolderSelect.innerHTML = `<option value="">-- สร้างโฟลเดอร์ใหม่ --</option>`;
    
    // Get unique folders for current active type
    const folderSet = new Set();
    state.items.filter(item => item.type === activeType).forEach(item => {
      folderSet.add(item.folder);
    });

    folderSet.forEach(folderName => {
      const opt = document.createElement("option");
      opt.value = folderName;
      opt.textContent = folderName;
      dom.addFolderSelect.appendChild(opt);
    });
  };

  // Image upload click triggers file dialog
  dom.polaroidUploadArea.addEventListener("click", () => {
    dom.imageUploadInput.click();
  });

  let loadedBase64Image = "";

  dom.imageUploadInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      loadedBase64Image = event.target.result;
      
      // Show Preview
      dom.uploadImgPreview.src = loadedBase64Image;
      dom.uploadImgPreview.classList.remove("hidden");
      dom.uploadPlaceholder.classList.add("hidden");

      // Draw Selected Sticker overlay
      const activeSticker = document.querySelector('input[name="decor-sticker"]:checked').value;
      dom.uploadStickerOverlay.innerHTML = window.SVG_ASSETS[activeSticker];
      dom.uploadStickerOverlay.classList.remove("hidden");
    };
    reader.readAsDataURL(file);
  });

  // Submit adding data form
  dom.addItemForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const type = document.querySelector('input[name="item-type"]:checked').value;
    const title = dom.addTitle.value.trim();
    const selectFolder = dom.addFolderSelect.value;
    const newFolder = dom.addFolderNew.value.trim();
    const date = dom.addDate.value;
    const subjectCode = dom.addSubjectCode.value.trim();
    const description = dom.addDescription.value.trim();
    const sticker = document.querySelector('input[name="decor-sticker"]:checked').value;

    const folder = newFolder || selectFolder;

    if (!folder) {
      alert("กรุณาเลือกโฟลเดอร์เดิม หรือระบุโฟลเดอร์ใหม่!");
      return;
    }

    if (!loadedBase64Image) {
      alert("กรุณาเลือกรูปภาพอัปโหลดประกอบพอร์ตโฟลิโอของคุณ!");
      return;
    }

    const newItem = {
      id: "item-" + Date.now(),
      username: state.currentUser.username,
      type,
      title,
      folder,
      date,
      subjectCode: type === "summary" ? subjectCode : "",
      description,
      image: loadedBase64Image,
      sticker
    };

    // Save to state
    state.items.unshift(newItem);

    // Save to localStorage
    const allStoredItems = JSON.parse(localStorage.getItem("scrapbookItems") || "[]");
    allStoredItems.unshift(newItem);
    localStorage.setItem("scrapbookItems", JSON.stringify(allStoredItems));

    // Reset Form
    dom.addItemForm.reset();
    loadedBase64Image = "";
    dom.uploadImgPreview.src = "#";
    dom.uploadImgPreview.classList.add("hidden");
    dom.uploadPlaceholder.classList.remove("hidden");
    dom.uploadStickerOverlay.classList.add("hidden");
    
    // Switch active radio triggers reset
    dom.typeRadioLabels.forEach(l => l.classList.remove("active"));
    dom.labelTypePortfolio.classList.add("active");
    dom.colSubjectCode.classList.add("hidden");

    // Success animation and navigate back home
    alert("✨ แปะรูปลงสมุดบันทึกสำเร็จเรียบร้อยแล้ว!");
    populateFolderDropdown();
    navigateTo("home");
  });

  // ================= PROFILE EDIT AND AVATAR SELECTION =================
  
  // Stats Calculator
  const updateProfileStats = () => {
    const portfolios = state.items.filter(item => item.type === "portfolio").length;
    const summaries = state.items.filter(item => item.type === "summary").length;
    const uniqueFolders = new Set(state.items.map(item => item.folder)).size;

    dom.countFolders.textContent = uniqueFolders;
    dom.countPortfolios.textContent = portfolios;
    dom.countSummaries.textContent = summaries;
  };

  // Avatar Choice panel toggle
  dom.btnEditAvatarTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    dom.avatarPickerModal.classList.toggle("hidden");
  });

  // Close avatar selection panel on outside clicks
  document.addEventListener("click", () => {
    dom.avatarPickerModal.classList.add("hidden");
  });

  dom.avatarPickerModal.addEventListener("click", (e) => {
    e.stopPropagation(); // Avoid closing
  });

  // Handle choosing avatar
  document.querySelectorAll(".avatar-choice-item").forEach(choice => {
    choice.addEventListener("click", () => {
      const avatarName = choice.getAttribute("data-avatar");
      
      // Save avatar in state
      state.currentUser.avatar = avatarName;
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));

      // Save in users DB list
      const usersList = JSON.parse(localStorage.getItem("scrapbookUsers") || "[]");
      const targetUser = usersList.find(u => u.username === state.currentUser.username);
      if (targetUser) {
        targetUser.avatar = avatarName;
        localStorage.setItem("scrapbookUsers", JSON.stringify(usersList));
      }

      updateAvatarsDOM();
      dom.avatarPickerModal.classList.add("hidden");
    });
  });

  // Profile fields edit
  dom.btnEditProfile.addEventListener("click", () => {
    // Switch to edit mode
    dom.profileBioText.classList.add("hidden");
    dom.profileBioEdit.classList.remove("hidden");
    dom.profileBioEdit.value = dom.profileBioText.textContent;
    
    // Toggle buttons
    dom.btnEditProfile.classList.add("hidden");
    dom.btnSaveProfile.classList.remove("hidden");
  });

  dom.btnSaveProfile.addEventListener("click", () => {
    const updatedBio = dom.profileBioEdit.value.trim();
    
    // Update local state
    state.currentUser.bio = updatedBio;
    localStorage.setItem("currentUser", JSON.stringify(state.currentUser));

    // Save in users DB list
    const usersList = JSON.parse(localStorage.getItem("scrapbookUsers") || "[]");
    const targetUser = usersList.find(u => u.username === state.currentUser.username);
    if (targetUser) {
      targetUser.bio = updatedBio;
      localStorage.setItem("scrapbookUsers", JSON.stringify(usersList));
    }

    // Refresh display details
    dom.profileBioText.textContent = updatedBio;
    dom.profileBioText.classList.remove("hidden");
    dom.profileBioEdit.classList.add("hidden");
    
    dom.btnEditProfile.classList.remove("hidden");
    dom.btnSaveProfile.classList.add("hidden");
  });

  // ================= UTILITIES & HELPERS =================
  const escapeHTML = (str) => {
    if (!str) return "";
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  };

  // ================= START INITIALIZATION =================
  injectSVGs();
  initNavigation();
  checkAuthStatus();
});
