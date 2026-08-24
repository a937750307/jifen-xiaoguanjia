// 简约线条图标集（SVG stroke 风格，无 emoji）
        const ICONS = {
            home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/></svg>',
            book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17.5H6.5A2.5 2.5 0 0 0 4 22z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/></svg>',
            plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
            minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14"/></svg>',
            exchange: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>',
            tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><path d="M7 7h.01"/></svg>',
            warn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
            gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/></svg>',
            chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 3v18h18"/><path d="M7 15v3M12 11v7M17 7v11"/></svg>',
            trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>',
            refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/></svg>',
            calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
            users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
            pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>',
            download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>',
            upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/></svg>',
            lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
            trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4a2 2 0 0 1 0-4h2"/><path d="M6 5H20V7C20 11 18 13 14 14.5V18H16V22H8V18H10V14.5C6 13 4 11 4 7V5Z"/><path d="M18 5V3H6V5"/></svg>',
            batch: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>'
        };
        
        // 注入 SVG 图标到带 data-icon  的元素
        document.querySelectorAll('[data-icon]').forEach(el => {
            el.innerHTML = ICONS[el.dataset.icon] || '';
        });
        
        // 禁止右键菜单和常见开发者工具快捷键
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
        
        document.addEventListener('keydown', function(e) {
            // F12
            if (e.key === 'F12') {
                e.preventDefault();
                return;
            }
            // Ctrl+Shift+I / Ctrl+Shift+J
            if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) {
                e.preventDefault();
                return;
            }
            // Ctrl+U 查看源码
            if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
                e.preventDefault();
                return;
            }
        });
        
        // 数据存储键（按模式隔离：家长/教师积分各自独立）
        const STORAGE_PREFIX = 'pointsDriver';
        const CURRENT_MODE_KEY = STORAGE_PREFIX + '_currentMode';
        
        // 当前模式：parent 家长 | teacher 教师
        let currentMode = 'parent';
        
        function getStorageKey(key) {
            return `${STORAGE_PREFIX}_${currentMode}_${key}`;
        }
        
        // 默认数据
        function getDefaultEarnItems() {
            if (currentMode === 'teacher') {
                return [
                    { id: 1, name: '考试第一名', points: 20 },
                    { id: 2, name: '考试第二名', points: 15 },
                    { id: 3, name: '考试第三名', points: 10 },
                    { id: 4, name: '考试第四名', points: 8 },
                    { id: 5, name: '考试第五名', points: 5 },
                    { id: 6, name: '单科进步5名或5名以上', points: 10 },
                    { id: 7, name: '课堂表现', points: 3 },
                    { id: 8, name: '作业完成', points: 3 },
                    { id: 9, name: '助人为乐', points: 5 },
                    { id: 10, name: '积极发言', points: 3 },
                    { id: 11, name: '卫生值日', points: 2 }
                ];
            }
            return [
                { id: 1, name: '完成作业', points: 5 },
                { id: 2, name: '阅读30分钟', points: 3 },
                { id: 3, name: '做家务', points: 8 },
                { id: 4, name: '锻炼身体', points: 5 },
                { id: 5, name: '早睡早起', points: 3 }
            ];
        }
        
        function getDefaultDeductItems() {
            if (currentMode === 'teacher') {
                return [
                    { id: 1, name: '考试作弊', points: -30 },
                    { id: 2, name: '单科退步10名或10名以上', points: -10 },
                    { id: 3, name: '课堂违纪', points: -5 },
                    { id: 4, name: '未交作业', points: -3 },
                    { id: 5, name: '追逐打闹', points: -5 },
                    { id: 6, name: '迟到早退', points: -3 }
                ];
            }
            return [
                { id: 1, name: '未完成作业', points: -10 },
                { id: 2, name: '迟到', points: -3 },
                { id: 3, name: '说脏话', points: -5 },
                { id: 4, name: '不整理房间', points: -3 }
            ];
        }
        
        function getDefaultRewards() {
            if (currentMode === 'teacher') {
                return [
                    { id: 1, name: '小奖状', points: 50 },
                    { id: 2, name: '免值日一次', points: 100 },
                    { id: 3, name: '优先选座位', points: 50 },
                    { id: 4, name: '当班干部一天', points: 200 },
                    { id: 5, name: '免写作业一次', points: 150 },
                    { id: 6, name: '课堂点名表扬', points: 30 },
                    { id: 7, name: '担任小组长一天', points: 80 },
                    { id: 8, name: '兑换文具', points: 60 },
                    { id: 9, name: '当升旗手', points: 120 },
                    { id: 10, name: '课堂小游戏', points: 80 }
                ];
            }
            return [
                { id: 1, name: '看电视30分钟', points: 30 },
                { id: 2, name: '玩游戏1小时', points: 80 },
                { id: 3, name: '买零食', points: 30 },
                { id: 4, name: '周末外出', points: 150 },
                { id: 5, name: '买玩具', points: 100 },
                { id: 6, name: '看电影一次', points: 60 },
                { id: 7, name: '去公园玩', points: 50 },
                { id: 8, name: '睡个懒觉', points: 150 },
                { id: 9, name: '选择周末活动', points: 80 },
                { id: 10, name: '额外零花钱', points: 30 }
            ];
        }
        
        // 全局数据
        let totalPoints = 0;
        let earnItems = [];
        let deductItems = [];
        let rewards = [];
        let records = [];
        let recordIdCounter = 0;
        let members = [];
        let currentMemberId = null;
        let currentEditMemberId = null;
        let memberGroupFilter = 'all';
        let memberGroupSort = 'name';
        
        // 当前操作项
        let currentEditItem = null;
        let currentDeleteItem = null;
        let currentDeleteType = '';
        let currentExchangeReward = null;
        let selectedDate = null;
        let displayYear = null;
        let displayMonth = null;
        let currentItemsTab = 'earn';
        
        // 迁移旧版数据到成员结构：旧键（无模式前缀）→ 模式键 → 默认成员，保证老数据不丢失
        function migrateLegacyData() {
            // 已迁移过则跳过
            if (localStorage.getItem(getStorageKey('members')) !== null) return;
            
            // 收集旧积分数据：优先模式键（第一版迁移结果），其次旧版无前缀键
            let legacyTotal = parseInt(localStorage.getItem(getStorageKey('totalPoints'))) || 0;
            let legacyRecords = JSON.parse(localStorage.getItem(getStorageKey('records'))) || [];
            let legacyCounter = parseInt(localStorage.getItem(getStorageKey('recordIdCounter'))) || 0;
            
            if (legacyTotal === 0 && legacyRecords.length === 0) {
                const oldTotal = localStorage.getItem(STORAGE_PREFIX + '_totalPoints');
                if (oldTotal !== null) {
                    legacyTotal = parseInt(oldTotal) || 0;
                    legacyRecords = JSON.parse(localStorage.getItem(STORAGE_PREFIX + '_records')) || [];
                    legacyCounter = parseInt(localStorage.getItem(STORAGE_PREFIX + '_recordIdCounter')) || 0;
                    // 设置项一并搬入模式键
                    if (localStorage.getItem(getStorageKey('earnItems')) === null && localStorage.getItem(STORAGE_PREFIX + '_earnItems') !== null) {
                        localStorage.setItem(getStorageKey('earnItems'), localStorage.getItem(STORAGE_PREFIX + '_earnItems'));
                    }
                    if (localStorage.getItem(getStorageKey('deductItems')) === null && localStorage.getItem(STORAGE_PREFIX + '_deductItems') !== null) {
                        localStorage.setItem(getStorageKey('deductItems'), localStorage.getItem(STORAGE_PREFIX + '_deductItems'));
                    }
                    if (localStorage.getItem(getStorageKey('rewards')) === null && localStorage.getItem(STORAGE_PREFIX + '_rewards') !== null) {
                        localStorage.setItem(getStorageKey('rewards'), localStorage.getItem(STORAGE_PREFIX + '_rewards'));
                    }
                }
            }
            
            // 创建默认成员并吸收旧积分
            const defaultMember = {
                id: 1,
                name: currentMode === 'parent' ? '孩子' : '学生',
                group: '',
                totalPoints: legacyTotal,
                records: legacyRecords,
                recordIdCounter: legacyCounter
            };
            localStorage.setItem(getStorageKey('members'), JSON.stringify([defaultMember]));
        }
        
        // 初始化数据
        function initData() {
            if (currentMode === 'parent') {
                migrateLegacyData();
            }
            earnItems = JSON.parse(localStorage.getItem(getStorageKey('earnItems'))) || getDefaultEarnItems();
            deductItems = JSON.parse(localStorage.getItem(getStorageKey('deductItems'))) || getDefaultDeductItems();
            rewards = JSON.parse(localStorage.getItem(getStorageKey('rewards'))) || getDefaultRewards();
            members = JSON.parse(localStorage.getItem(getStorageKey('members'))) || [];
            if (members.length === 0) {
                members = [{ id: 1, name: currentMode === 'parent' ? '孩子' : '学生', group: '', totalPoints: 0, records: [], recordIdCounter: 0 }];
            }
            // 兼容旧数据：为没有 group 字段的成员补默认值
            members.forEach(m => {
                if (typeof m.group !== 'string') m.group = '';
            });
            const savedMemberId = parseInt(localStorage.getItem(getStorageKey('currentMemberId')));
            currentMemberId = members.some(m => m.id === savedMemberId) ? savedMemberId : members[0].id;
            syncFromMember();
            renderMemberBar();
        }
        
        // 保存数据（当前成员积分写回成员列表，再整体落盘）
        function saveData() {
            syncToMember();
            localStorage.setItem(getStorageKey('members'), JSON.stringify(members));
            localStorage.setItem(getStorageKey('currentMemberId'), currentMemberId);
            localStorage.setItem(getStorageKey('earnItems'), JSON.stringify(earnItems));
            localStorage.setItem(getStorageKey('deductItems'), JSON.stringify(deductItems));
            localStorage.setItem(getStorageKey('rewards'), JSON.stringify(rewards));
        }
        
        // 获取当前成员对象
        function getCurrentMember() {
            return members.find(m => m.id === currentMemberId) || members[0] || null;
        }
        
        // 从当前成员同步到全局变量
        function syncFromMember() {
            const m = getCurrentMember();
            totalPoints = m ? m.totalPoints : 0;
            records = m ? m.records : [];
            recordIdCounter = m ? m.recordIdCounter : 0;
        }
        
        // 全局变量写回当前成员
        function syncToMember() {
            const m = getCurrentMember();
            if (m) {
                m.totalPoints = totalPoints;
                m.records = records;
                m.recordIdCounter = recordIdCounter;
            }
        }
        
        // 切换家长/教师模式
        function switchMode(mode) {
            if (mode === currentMode) return;
            saveData(); // 保存当前模式数据
            currentMode = mode;
            localStorage.setItem(CURRENT_MODE_KEY, mode); // 自动记忆当前模式
            initData();
            saveData(); // 新模式默认数据立即落盘，保证两模式数据键独立存在
            selectedDate = null;
            displayYear = null;
            displayMonth = null;
            updateModeUI();
            switchPage('home');
        }
        
        // 更新模式相关 UI（含画面主题区分：家长暖橙 / 教师蓝）
        function updateModeUI() {
            document.body.classList.toggle('mode-teacher', currentMode === 'teacher');
            document.getElementById('nav-parent').classList.toggle('active', currentMode === 'parent');
            document.getElementById('nav-teacher').classList.toggle('active', currentMode === 'teacher');
        }
        
        // 渲染成员选择栏
        function renderMemberBar() {
            const bar = document.getElementById('member-bar');
            let html = `<select class="member-select" id="member-select" onchange="switchMember(parseInt(this.value))">`;
            members.forEach(m => {
                const display = m.group ? `${m.name} (${m.group})` : m.name;
                html += `<option value="${m.id}" ${m.id === currentMemberId ? 'selected' : ''}>${display}</option>`;
            });
            html += `</select>`;
            html += `<div class="member-chip add" onclick="showMemberEditModal()">+</div>`;
            html += `<div class="member-manage-btn" onclick="showMemberManageModal()">${ICONS.users} 管理</div>`;
            html += `<span class="member-count">共${members.length}人</span>`;
            bar.innerHTML = html;
        }
        
        // 切换当前成员
        function switchMember(memberId) {
            if (memberId === currentMemberId) return;
            syncToMember();
            saveData();
            currentMemberId = memberId;
            localStorage.setItem(getStorageKey('currentMemberId'), currentMemberId);
            syncFromMember();
            renderMemberBar();
            updatePointsDisplay();
            updateTodayPointsDisplay();
            if (document.getElementById('current-week-grid')) {
                loadCurrentWeekGrid('current-week-grid', 'week-score-text');
            }
            const activePage = document.querySelector('.page.active');
            if (activePage) {
                updateHeader(activePage.id.replace('-page', ''));
            }
        }
        
        // 显示成员管理弹窗
        function showMemberManageModal() {
            renderMemberManageList();
            document.getElementById('member-manage-modal').classList.add('show');
        }
        
        // 切换分组的收纳/展开
        function toggleMemberGroup(titleEl) {
            const groupEl = titleEl.parentElement;
            groupEl.classList.toggle('collapsed');
        }
        
        // 设置成员分组筛选
        function setMemberGroupFilter(group) {
            memberGroupFilter = group || 'all';
            renderMemberManageList();
        }
        
        // 设置成员分组排序
        function setMemberGroupSort(sort) {
            memberGroupSort = (sort === 'count' ? 'count' : 'name');
            renderMemberManageList();
        }
        
        // 渲染成员管理列表（按分组聚合显示，支持筛选和排序）
        function renderMemberManageList() {
            const container = document.getElementById('member-manage-list');
            if (members.length === 0) {
                container.innerHTML = `
                    <div class="empty-state compact">
                        <div class="empty-icon">+</div>
                        <div class="empty-title">暂无成员</div>
                        <div class="empty-subtitle">点击上方「+ 添加成员」按钮添加第一个成员</div>
                    </div>
                `;
                return;
            }
            
            // 按分组聚合
            const groups = {};
            members.forEach(m => {
                const g = m.group || '未分组';
                if (!groups[g]) groups[g] = [];
                groups[g].push(m);
            });
            
            // 分组筛选
            let groupNames = Object.keys(groups);
            if (memberGroupFilter !== 'all') {
                groupNames = groupNames.filter(g => g === memberGroupFilter);
            }
            
            // 分组排序
            groupNames.sort((a, b) => {
                if (a === '未分组') return 1;
                if (b === '未分组') return -1;
                if (memberGroupSort === 'count') {
                    return groups[b].length - groups[a].length;
                }
                return a.localeCompare(b, 'zh-CN');
            });
            
            // 生成分组选项
            const allGroupOptions = Object.keys(groups).sort((a, b) => a.localeCompare(b, 'zh-CN')).map(g => {
                return `<option value="${g}" ${memberGroupFilter === g ? 'selected' : ''}>${g}</option>`;
            }).join('');
            
            const headerHtml = `
                <div class="member-manage-header">
                    <select class="form-input member-group-filter" onchange="setMemberGroupFilter(this.value)">
                        <option value="all" ${memberGroupFilter === 'all' ? 'selected' : ''}>全部分组</option>
                        ${allGroupOptions}
                    </select>
                    <select class="form-input member-group-sort" onchange="setMemberGroupSort(this.value)">
                        <option value="name" ${memberGroupSort === 'name' ? 'selected' : ''}>按名称</option>
                        <option value="count" ${memberGroupSort === 'count' ? 'selected' : ''}>按人数</option>
                    </select>
                </div>
            `;
            
            if (groupNames.length === 0) {
                container.innerHTML = headerHtml + '<div class="empty-text">该分组暂无成员</div>';
                return;
            }
            
            const listHtml = groupNames.map(g => {
                const groupMembers = groups[g];
                return `
                    <div class="member-group">
                        <div class="member-group-title" onclick="toggleMemberGroup(this)">
                            <span class="member-group-toggle">▼</span>
                            <span class="member-group-name">${g}</span>
                            <span class="member-group-count">(${groupMembers.length}人)</span>
                        </div>
                        <div class="member-group-content">
                            ${groupMembers.map(m => `
                                <div class="member-manage-item">
                                    <div>
                                        <div class="member-name">${m.name}</div>
                                        <div class="member-points">积分: ${m.totalPoints || 0}</div>
                                    </div>
                                    <div class="member-manage-actions">
                                        <button class="action-btn edit" onclick="editMember(${m.id})">编辑</button>
                                        <button class="action-btn delete" onclick="deleteMemberConfirm(${m.id})">删除</button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }).join('');
            
            container.innerHTML = headerHtml + listHtml;
        }
        
        // 显示添加/编辑成员弹窗
        function showMemberEditModal(memberId) {
            currentEditMemberId = memberId || null;
            const m = memberId ? members.find(x => x.id === memberId) : null;
            document.getElementById('member-edit-modal-title').textContent = m ? '编辑成员' : '添加成员';
            document.getElementById('member-name-input').value = m ? m.name : '';
            document.getElementById('member-group-input').value = m ? (m.group || '') : '';
            document.getElementById('member-name-hint').style.display = (!memberId && currentMode === 'teacher') ? 'block' : 'none';
            document.getElementById('member-name-label').textContent = (!memberId && currentMode === 'teacher') ? '成员名字（可批量）' : '成员名字';
            document.getElementById('member-edit-modal').classList.add('show');
        }
        
        function showAddMemberModal() {
            showMemberEditModal(null);
        }
        
        // 编辑成员
        function editMember(memberId) {
            closeModal('member-manage-modal');
            showMemberEditModal(memberId);
        }
        
        // 保存成员
        function saveMember() {
            const raw = document.getElementById('member-name-input').value.trim();
            const group = (document.getElementById('member-group-input').value || '').trim();
            if (!raw) {
                showAlert('请输入成员名字');
                return;
            }
            if (currentEditMemberId) {
                const m = members.find(x => x.id === currentEditMemberId);
                if (m) {
                    m.name = raw;
                    m.group = group;
                }
            } else {
                // 教师模式支持批量添加：按换行、逗号、空格拆分
                let names = [raw];
                if (currentMode === 'teacher') {
                    names = raw.split(/[\n,，, ]+/).map(n => n.trim()).filter(n => n);
                }
                if (names.length === 0) {
                    showAlert('请输入成员名字');
                    return;
                }
                names.forEach(name => {
                    const newId = members.length > 0 ? Math.max(...members.map(x => x.id)) + 1 : 1;
                    members.push({ id: newId, name: name, group: group, totalPoints: 0, records: [], recordIdCounter: 0 });
                    currentMemberId = newId;
                });
                syncFromMember();
                if (names.length > 1) {
                    showAlert(`成功添加 ${names.length} 名成员`);
                }
            }
            saveData();
            renderMemberBar();
            updatePointsDisplay();
            closeModal('member-edit-modal');
            if (document.getElementById('member-manage-modal').classList.contains('show')) {
                renderMemberManageList();
            }
        }
        
        // 删除成员确认
        let pendingDeleteMemberId = null;
        function deleteMemberConfirm(memberId) {
            if (members.length <= 1) {
                showAlert('至少保留一个成员');
                return;
            }
            pendingDeleteMemberId = memberId;
            document.getElementById('delete-confirm-text').textContent = '确定要删除该成员及其积分记录吗？';
            document.getElementById('delete-confirm-modal').classList.add('show');
        }
        
        // 删除成员
        function deleteMember(memberId) {
            const idx = members.findIndex(m => m.id === memberId);
            if (idx === -1) return;
            members.splice(idx, 1);
            if (currentMemberId === memberId) {
                currentMemberId = members[0].id;
                syncFromMember();
            }
            saveData();
            renderMemberBar();
            updatePointsDisplay();
            updateTodayPointsDisplay();
            if (document.getElementById('member-manage-modal').classList.contains('show')) {
                renderMemberManageList();
            }
        }

        // 批量加减分相关
        let batchSelectedIds = new Set();

        function showBatchOperationModal() {
            batchSelectedIds = new Set();
            document.getElementById('batch-event-name').value = '';
            document.getElementById('batch-points').value = '';
            renderBatchMemberList();
            updateBatchSelectedCount();
            document.getElementById('batch-operation-modal').classList.add('show');
        }

        function renderBatchMemberList() {
            const container = document.getElementById('batch-member-list');
            if (members.length === 0) {
                container.innerHTML = '<div class="empty-text">没有可选成员</div>';
                return;
            }
            container.innerHTML = members.map(m => {
                const display = m.group ? `${m.name} (${m.group})` : m.name;
                return `
                    <div class="batch-member-item" onclick="toggleBatchMember(${m.id})">
                        <input type="checkbox" class="batch-member-checkbox" data-id="${m.id}" ${batchSelectedIds.has(m.id) ? 'checked' : ''} onclick="event.stopPropagation(); toggleBatchMember(${m.id})">
                        <div class="batch-member-info">
                            <div class="batch-member-name">${display}</div>
                            <div class="batch-member-points">积分: ${m.totalPoints || 0}</div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function toggleBatchMember(memberId) {
            if (batchSelectedIds.has(memberId)) {
                batchSelectedIds.delete(memberId);
            } else {
                batchSelectedIds.add(memberId);
            }
            renderBatchMemberList();
            updateBatchSelectedCount();
        }

        function selectAllBatchMembers() {
            members.forEach(m => batchSelectedIds.add(m.id));
            renderBatchMemberList();
            updateBatchSelectedCount();
        }

        function deselectAllBatchMembers() {
            batchSelectedIds.clear();
            renderBatchMemberList();
            updateBatchSelectedCount();
        }

        function updateBatchSelectedCount() {
            document.getElementById('batch-selected-count').textContent = `已选 ${batchSelectedIds.size} 人`;
        }

        function submitBatchPoints(type) {
            const eventName = document.getElementById('batch-event-name').value.trim();
            const amount = parseInt(document.getElementById('batch-points').value);
            if (!eventName) {
                showAlert('请输入事件名称');
                return;
            }
            if (!amount || amount <= 0) {
                showAlert('请输入有效分值');
                return;
            }
            if (batchSelectedIds.size === 0) {
                showAlert('请至少选择一名成员');
                return;
            }

            const actionText = type === 'income' ? '加分' : '扣分';
            const title = `${eventName}（批量${actionText}）`;
            const value = type === 'income' ? amount : -amount;
            const now = new Date();
            const dateStr = formatDate(now);
            const timeStr = now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });

            batchSelectedIds.forEach(memberId => {
                const m = members.find(x => x.id === memberId);
                if (!m) return;
                m.totalPoints += value;
                m.recordIdCounter++;
                m.records.unshift({
                    id: m.recordIdCounter,
                    title: title,
                    amount: value,
                    type: type,
                    date: dateStr,
                    time: timeStr
                });
            });

            syncFromMember();
            saveData();
            renderMemberBar();
            updatePointsDisplay();
            updateTodayPointsDisplay();
            closeModal('batch-operation-modal');
            showAlert(`已为 ${batchSelectedIds.size} 名成员${type === 'income' ? '加' : '扣'}分`);
        }

        // 更新积分显示
        function updatePointsDisplay() {
            document.getElementById('total-points').textContent = totalPoints.toLocaleString();
            const m = getCurrentMember();
            const titleEl = document.getElementById('points-title');
            const nameSpan = titleEl.querySelector('.points-name');
            const labelSpan = titleEl.querySelector('.points-label');
            if (m) {
                nameSpan.textContent = m.name + '的';
                labelSpan.textContent = '总积分';
            } else {
                nameSpan.textContent = '';
                labelSpan.textContent = '总积分';
            }
        }
        
        // 页面标题映射
        const PAGE_TITLES = {
            'home': '积分小管家',
            'earn': '赚取积分',
            'deduct': '扣减积分',
            'exchange': '奖励兑换',
            'items-manage': '积分项管理',
            'exchange-manage': '兑换奖励管理',
            'records': '积分记录'
        };
        
        // 更新顶部标题栏
        function updateHeader(pageName) {
            const backBtn = document.getElementById('back-btn');
            const titleEl = document.getElementById('mode-title');
            const modeEl = document.getElementById('header-mode');
            const memberEl = document.getElementById('header-member');
            const helpEl = document.getElementById('header-help');
            const modeText = currentMode === 'parent' ? '家长模式' : '教师模式';
            
            if (pageName === 'home') {
                backBtn.classList.remove('show');
                titleEl.textContent = '积分小管家';
                modeEl.textContent = modeText;
                modeEl.style.display = '';
                memberEl.textContent = '';
            } else {
                backBtn.classList.add('show');
                titleEl.textContent = PAGE_TITLES[pageName] || '';
                modeEl.textContent = '';
                modeEl.style.display = 'none';
                // 排行榜不显示当前成员名
                if (pageName === 'leaderboard') {
                    memberEl.textContent = '';
                } else {
                    const m = getCurrentMember();
                    memberEl.textContent = m ? m.name : '';
                }
            }
            // 说明按钮只在首页显示
            if (helpEl) {
                helpEl.style.display = (pageName === 'home') ? 'inline-block' : 'none';
            }
            document.title = '积分小管家-' + modeText;
        }
        
        // 返回首页
        function goBack() {
            switchPage('home');
        }
        
        // 页面切换
        function switchPage(pageName) {
            // 隐藏所有页面
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // 显示目标页面
            const targetPage = document.getElementById(pageName + '-page');
            if (targetPage) {
                targetPage.classList.add('active');
            }
            
            // 更新底部导航（按当前模式高亮）
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            if (currentMode === 'parent') {
                document.getElementById('nav-parent').classList.add('active');
            } else {
                document.getElementById('nav-teacher').classList.add('active');
            }
            
            // 加载页面数据
            if (pageName === 'home') {
                loadHomeData();
            } else if (pageName === 'earn') {
                loadEarnList();
            } else if (pageName === 'deduct') {
                loadDeductList();
            } else if (pageName === 'exchange') {
                loadExchangeList();
            } else if (pageName === 'items-manage') {
                loadItemsManageList();
            } else if (pageName === 'exchange-manage') {
                loadRewardManageList();
            } else if (pageName === 'records') {
                loadRecordsData();
            } else if (pageName === 'leaderboard') {
                loadLeaderboard();
            }
            
            updateHeader(pageName);
        }
        
        // 更新当天积分显示
        function updateTodayPointsDisplay() {
            const today = formatDate(new Date());
            const dayRecords = records.filter(r => r.date === today);
            const earnPoints = dayRecords.filter(r => r.type === 'income').reduce((sum, r) => sum + r.amount, 0);
            const deductPoints = Math.abs(dayRecords.filter(r => r.type === 'expense').reduce((sum, r) => sum + r.amount, 0));
            const netPoints = earnPoints - deductPoints;
            
            const challengeEl = document.getElementById('daily-challenge');
            challengeEl.querySelector('.today-detail').textContent = `赚${earnPoints}分 - 扣${deductPoints}分`;
            challengeEl.querySelector('.today-total').textContent = `= ${netPoints}分`;
        }
        
        // 加载首页数据
        function loadHomeData() {
            renderMemberBar();
            updatePointsDisplay();
            updateTodayPointsDisplay();
            loadCurrentWeekGrid('current-week-grid', 'week-score-text');
            updateHeader(document.querySelector('.page.active').id.replace('-page', ''));
        }
        
        // 加载赚取积分列表
        function loadEarnList() {
            const listContainer = document.getElementById('earn-list');
            let html = `
                <div class="quick-add">
                    <input class="qa-name" id="quick-earn-name" placeholder="名称（留空则用日期）">
                    <input class="qa-points" id="quick-earn-points" type="number" placeholder="积分">
                    <button class="qa-btn" onclick="quickEarn()">赚取</button>
                </div>
            `;
            if (earnItems.length === 0) {
                html += `
                    <div class="empty-state compact">
                        <div class="empty-icon">${ICONS.plus}</div>
                        <div class="empty-title">暂无赚取积分项</div>
                        <div class="empty-subtitle">先去「积分项设置」添加吧</div>
                    </div>
                `;
            } else {
                html += earnItems.map(item => `
                    <div class="list-item">
                        <div class="item-info">
                            <div class="item-name">${item.name}</div>
                            <div class="item-points income">+${item.points}积分</div>
                        </div>
                        <button class="item-btn earn" onclick="earnPoints(${item.id})">赚取</button>
                    </div>
                `).join('');
            }
            listContainer.innerHTML = html;
        }
        
        // 加载扣减积分列表
        function loadDeductList() {
            const listContainer = document.getElementById('deduct-list');
            let html = `
                <div class="quick-add deduct">
                    <input class="qa-name" id="quick-deduct-name" placeholder="名称（留空则用日期）">
                    <input class="qa-points" id="quick-deduct-points" type="number" placeholder="积分">
                    <button class="qa-btn" onclick="quickDeduct()">扣减</button>
                </div>
            `;
            if (deductItems.length === 0) {
                html += `
                    <div class="empty-state compact">
                        <div class="empty-icon">${ICONS.warn}</div>
                        <div class="empty-title">暂无扣减积分项</div>
                        <div class="empty-subtitle">先去「扣分项设置」添加吧</div>
                    </div>
                `;
            } else {
                html += deductItems.map(item => `
                    <div class="list-item">
                        <div class="item-info">
                            <div class="item-name">${item.name}</div>
                            <div class="item-points expense">${item.points}积分</div>
                        </div>
                        <button class="item-btn deduct" onclick="deductPoints(${item.id})">扣减</button>
                    </div>
                `).join('');
            }
            listContainer.innerHTML = html;
        }
        
        // 加载兑换列表
        function loadExchangeList() {
            const listContainer = document.getElementById('exchange-list');
            let html = `
                <div class="quick-add exchange">
                    <input class="qa-name" id="quick-exchange-name" placeholder="名称（留空则用日期）">
                    <input class="qa-points" id="quick-exchange-points" type="number" placeholder="积分">
                    <button class="qa-btn" onclick="quickExchange()">兑换</button>
                </div>
            `;
            if (rewards.length === 0) {
                html += `
                    <div class="empty-state compact">
                        <div class="empty-icon">${ICONS.gift}</div>
                        <div class="empty-title">暂无兑换奖励</div>
                        <div class="empty-subtitle">先去「兑换奖励设置」添加吧</div>
                    </div>
                `;
            } else {
                html += rewards.map(reward => `
                    <div class="list-item">
                        <div class="item-info">
                            <div class="item-name">${reward.name}</div>
                            <div class="item-points">${reward.points}积分</div>
                        </div>
                        <button class="item-btn exchange" onclick="showExchangeModal(${reward.id})">兑换</button>
                    </div>
            `).join('');
            }
            listContainer.innerHTML = html;
        }
        
        // 加载赚取积分项管理列表
        function loadEarnManageList() {
            const listContainer = document.getElementById('earn-manage-list');
            if (earnItems.length === 0) {
                listContainer.innerHTML = `
                    <div class="empty-state compact">
                        <div class="empty-icon">${ICONS.tag}</div>
                        <div class="empty-title">暂无赚取积分项</div>
                        <div class="empty-subtitle">点击右上角「添加」按钮创建</div>
                    </div>
                `;
                return;
            }
            
            listContainer.innerHTML = earnItems.map(item => `
                <div class="list-item">
                    <div class="item-info">
                        <div class="item-name">${item.name}</div>
                        <div class="item-points income">+${item.points}积分</div>
                    </div>
                    <div class="item-actions">
                        <button class="action-btn edit" onclick="editEarnItem(${item.id})">编辑</button>
                        <button class="action-btn delete" onclick="deleteEarnItem(${item.id})">删除</button>
                    </div>
                </div>
            `).join('');
        }
        
        // 加载扣减积分项管理列表
        function loadDeductManageList() {
            const listContainer = document.getElementById('deduct-manage-list');
            if (deductItems.length === 0) {
                listContainer.innerHTML = `
                    <div class="empty-state compact">
                        <div class="empty-icon">${ICONS.warn}</div>
                        <div class="empty-title">暂无扣减积分项</div>
                        <div class="empty-subtitle">点击右上角「添加」按钮创建</div>
                    </div>
                `;
                return;
            }
            
            listContainer.innerHTML = deductItems.map(item => `
                <div class="list-item">
                    <div class="item-info">
                        <div class="item-name">${item.name}</div>
                        <div class="item-points expense">${item.points}积分</div>
                    </div>
                    <div class="item-actions">
                        <button class="action-btn edit" onclick="editDeductItem(${item.id})">编辑</button>
                        <button class="action-btn delete" onclick="deleteDeductItem(${item.id})">删除</button>
                    </div>
                </div>
            `).join('');
        }

        // 加载积分项管理页面（合并赚取/扣减积分项）
        function loadItemsManageList() {
            loadEarnManageList();
            loadDeductManageList();
            switchItemsTab(currentItemsTab);
        }

        function switchItemsTab(tab) {
            currentItemsTab = tab;
            document.querySelectorAll('.items-tab').forEach(el => {
                el.classList.toggle('active', el.dataset.tab === tab);
            });
            document.getElementById('earn-manage-list').style.display = tab === 'earn' ? 'block' : 'none';
            document.getElementById('deduct-manage-list').style.display = tab === 'deduct' ? 'block' : 'none';
            document.getElementById('items-manage-title').textContent = tab === 'earn' ? '赚取积分项管理' : '扣减积分项管理';
            document.getElementById('items-add-btn').onclick = tab === 'earn' ? showAddEarnItemModal : showAddDeductItemModal;
        }
        
        // 加载奖励管理列表
        function loadRewardManageList() {
            const listContainer = document.getElementById('reward-manage-list');
            if (rewards.length === 0) {
                listContainer.innerHTML = `
                    <div class="empty-state compact">
                        <div class="empty-icon">${ICONS.gift}</div>
                        <div class="empty-title">暂无兑换奖励</div>
                        <div class="empty-subtitle">点击右上角「添加」按钮创建</div>
                    </div>
                `;
                return;
            }
            
            listContainer.innerHTML = rewards.map(reward => `
                <div class="list-item">
                    <div class="item-info">
                        <div class="item-name">${reward.name}</div>
                        <div class="item-points">${reward.points}积分</div>
                    </div>
                    <div class="item-actions">
                        <button class="action-btn edit" onclick="editReward(${reward.id})">编辑</button>
                        <button class="action-btn delete" onclick="deleteReward(${reward.id})">删除</button>
                    </div>
                </div>
            `).join('');
        }
        
        // 加载积分记录数据
        function loadRecordsData() {
            // 如果没有选中日期，默认选中当天
            if (!selectedDate) {
                selectedDate = formatDate(new Date());
            }
            loadCurrentWeekGrid('records-week-grid', 'records-week-score-text');
            loadDayRecords();
            loadHistoryWeeks();
        }
        
        // 加载积分排行榜
        function loadLeaderboard() {
            const container = document.getElementById('leaderboard-list');
            // 按总积分排序
            const sortedMembers = [...members].sort((a, b) => b.totalPoints - a.totalPoints);
            
            if (sortedMembers.length === 0) {
                container.innerHTML = `
                    <div class="empty-state compact">
                        <div class="empty-icon">${ICONS.users}</div>
                        <div class="empty-title">暂无成员</div>
                        <div class="empty-subtitle">先添加成员后才能查看排行榜</div>
                    </div>
                `;
                return;
            }
            
            container.innerHTML = sortedMembers.map((m, index) => {
                const rank = index + 1;
                const rankClass = rank === 1 ? 'top1' : rank === 2 ? 'top2' : rank === 3 ? 'top3' : '';
                // 最近 3 条积分记录（按时间倒序）
                const recentRecords = (m.records || []).slice().sort((a, b) => b.id - a.id).slice(0, 3);
                let recordsHtml = '';
                if (recentRecords.length > 0) {
                    recordsHtml = `
                        <div class="leaderboard-records">
                            <div class="leaderboard-records-title">最近积分记录</div>
                            ${recentRecords.map(r => `
                                <div class="leaderboard-record">
                                    <span class="leaderboard-record-title">${r.title}</span>
                                    <span class="leaderboard-record-amount ${r.type}">${r.type === 'income' ? '+' : ''}${r.amount}</span>
                                </div>
                            `).join('')}
                        </div>
                    `;
                } else {
                    recordsHtml = `
                        <div class="leaderboard-records">
                            <div class="leaderboard-records-title">最近积分记录</div>
                            <div class="leaderboard-record" style="color:#999;">暂无记录</div>
                        </div>
                    `;
                }
                
                return `
                    <div class="leaderboard-item">
                        <div class="leaderboard-header">
                            <div class="leaderboard-rank ${rankClass}">${rank}</div>
                            <div class="leaderboard-info">
                                <div class="leaderboard-name">${m.name}</div>
                                <div class="leaderboard-points">总积分：<strong>${m.totalPoints}</strong></div>
                            </div>
                        </div>
                        ${recordsHtml}
                    </div>
                `;
            }).join('');
        }
        
        // 加载当前周积分网格
        function loadCurrentWeekGrid(gridId, titleId) {
            const grid = document.getElementById(gridId);
            
            const now = new Date();
            const currentDay = now.getDay();
            const weekStart = new Date(now);
            weekStart.setDate(now.getDate() - (currentDay === 0 ? 6 : currentDay - 1)); // 周一
            
            let weekTotal = 0;
            const dayNames = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
            
            let cellsHtml = '';
            dayNames.forEach((dayName, index) => {
                const date = new Date(weekStart);
                date.setDate(weekStart.getDate() + index);
                const dateStr = formatDate(date);
                
                const dayRecords = records.filter(r => r.date === dateStr);
                const dayTotal = dayRecords.reduce((sum, r) => sum + r.amount, 0);
                weekTotal += dayTotal;
                
                const isToday = date.toDateString() === now.toDateString();
                const isSelected = selectedDate === dateStr;
                
                let pointsClass = '';
                if (isToday) {
                    pointsClass = 'today-points';
                } else if (isSelected) {
                    pointsClass = 'selected-points';
                }
                
                cellsHtml += `
                    <div class="day-item ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}" onclick="switchToDayRecords('${dateStr}')">
                        <div class="day-name">${dayName}</div>
                        <div class="day-points ${pointsClass}">${dayTotal > 0 ? '+' : ''}${dayTotal}</div>
                    </div>
                `;
            });
            grid.innerHTML = cellsHtml;
            
            // 更新本周积分标题
            const scoreEl = document.getElementById(titleId);
            if (scoreEl) {
                const sign = weekTotal >= 0 ? '+' : '';
                scoreEl.textContent = `本周积分 (${sign}${weekTotal})`;
            }
        }
        
        // 切换到记录页面并显示当天详情
        function switchToDayRecords(dateStr) {
            selectedDate = dateStr;
            switchPage('records');
            loadDayRecords();
            // 重新加载周积分网格，以更新选中状态
            loadCurrentWeekGrid('records-week-grid', 'records-week-score-text');
        }
        
        // 加载每日积分记录
        function loadDayRecords() {
            const container = document.getElementById('day-records');
            
            if (selectedDate) {
                const dayRecords = records.filter(r => r.date === selectedDate);
                if (dayRecords.length === 0) {
                    container.innerHTML = `
                        <div class="empty-state">
                            <div class="empty-icon">${ICONS.chart}</div>
                            <div class="empty-text">该日期暂无积分记录</div>
                        </div>
                    `;
                } else {
                    container.innerHTML = dayRecords.map(record => `
                        <div class="record-item">
                            <div class="record-info">
                                <div class="record-title">${record.title}</div>
                                <div class="record-time">${record.time}</div>
                            </div>
                            <div class="record-amount ${record.type}">${record.type === 'income' ? '+' : ''}${record.amount}</div>
                            <button class="action-btn delete" onclick="undoRecord(${record.id})" style="font-size:10px;padding:3px 8px;flex-shrink:0;">撤销</button>
                        </div>
                    `).join('');
                }
            } else {
                container.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">${ICONS.calendar}</div>
                        <div class="empty-text">点击上方某天查看详细记录</div>
                    </div>
                `;
            }
        }
        
        // 加载历史积分（月日历 + 年历）
        function loadHistoryWeeks() {
            const container = document.getElementById('history-weeks');
            const now = new Date();
            const curYear = now.getFullYear();
            const curMonth = now.getMonth();
            const weekdayNames = ['一', '二', '三', '四', '五', '六', '日'];
            const monthNames = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
            
            // 确定显示的月份
            if (displayYear === null) displayYear = curYear;
            if (displayMonth === null) displayMonth = curMonth;
            const dYear = displayYear;
            const dMonth = displayMonth;
            
            // 年度总积分
            const yearStart = formatDate(new Date(dYear, 0, 1));
            const yearEnd = formatDate(new Date(dYear, 11, 31));
            const yearRecords = records.filter(r => r.date >= yearStart && r.date <= yearEnd);
            const yearTotal = yearRecords.reduce((sum, r) => sum + r.amount, 0);
            const ySign = yearTotal > 0 ? '+' : '';
            
            // 当月月历
            const daysInMonth = new Date(dYear, dMonth + 1, 0).getDate();
            const monthStart = formatDate(new Date(dYear, dMonth, 1));
            const monthEnd = formatDate(new Date(dYear, dMonth, daysInMonth));
            const monthRecords = records.filter(r => r.date >= monthStart && r.date <= monthEnd);
            const monthTotal = monthRecords.reduce((sum, r) => sum + r.amount, 0);
            const totalSign = monthTotal > 0 ? '+' : '';
            const firstDay = new Date(dYear, dMonth, 1).getDay();
            const startPadding = firstDay === 0 ? 6 : firstDay - 1;
            
            let html = `<div class="month-calendar">
                <div class="month-header">
                    <div class="month-title">${dYear}年${dMonth + 1}月 (${totalSign}${monthTotal})</div>
                </div>
                <div class="month-weekdays">${weekdayNames.map(w => `<div class="month-weekday">${w}</div>`).join('')}</div>
                <div class="month-days">`;
            
            for (let p = 0; p < startPadding; p++) {
                html += `<div class="month-day empty"></div>`;
            }
            
            for (let d = 1; d <= daysInMonth; d++) {
                const dateStr = formatDate(new Date(dYear, dMonth, d));
                const dayRecords = records.filter(r => r.date === dateStr);
                const dayTotal = dayRecords.reduce((sum, r) => sum + r.amount, 0);
                const ptsStr = dayTotal !== 0 ? ((dayTotal > 0 ? '+' : '') + dayTotal) : '';
                const isToday = dateStr === formatDate(now) ? ' today' : '';
                html += `<div class="month-day${isToday}">
                    <div class="month-day-num">${d}</div>
                    <div class="month-day-pts">${ptsStr}</div>
                </div>`;
            }
            
            html += `</div></div>`;
            
            // 年历
            html += `<div class="section-title">${dYear}年总积分 (${ySign}${yearTotal})</div>`;
            
            // 年历 6×2 宫格
            html += `<div class="year-calendar">`;
            for (let m = 0; m < 12; m++) {
                const mStart = formatDate(new Date(dYear, m, 1));
                const mEnd = formatDate(new Date(dYear, m, new Date(dYear, m + 1, 0).getDate()));
                const mRecords = records.filter(r => r.date >= mStart && r.date <= mEnd);
                const mTotal = mRecords.reduce((sum, r) => sum + r.amount, 0);
                const mSign = mTotal > 0 ? '+' : '';
                const isCur = (dYear === curYear && m === curMonth) ? ' current' : '';
                html += `<div class="year-month-card${isCur}" onclick="switchMonthCalendar(${m})">
                    <div class="year-month-name">${monthNames[m]}</div>
                    <div class="year-month-total">${mSign}${mTotal}</div>
                </div>`;
            }
            html += `</div>`;
            
            container.innerHTML = html;
        }
        
        // 点击年历卡片切换月日历
        function switchMonthCalendar(month) {
            displayYear = displayYear !== null ? displayYear : new Date().getFullYear();
            displayMonth = month;
            loadHistoryWeeks();
        }
        
        // 格式化日期
        function formatDate(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
        
        // 赚取积分
        // 快速赚取积分（自定义填入）
        function quickEarn() {
            const nameEl = document.getElementById('quick-earn-name');
            const pointsEl = document.getElementById('quick-earn-points');
            const name = nameEl.value.trim() || formatDate(new Date());
            const points = parseInt(pointsEl.value);
            if (!points || points <= 0) { showAlert('请输入有效积分'); return; }
            totalPoints += points;
            addRecord(name, points, 'income');
            nameEl.value = '';
            pointsEl.value = '';
            updatePointsDisplay();
            updateTodayPointsDisplay();
            saveData();
            showAlert(`赚取 +${points} 积分`);
        }
        
        // 快速扣减积分（自定义填入）
        function quickDeduct() {
            const nameEl = document.getElementById('quick-deduct-name');
            const pointsEl = document.getElementById('quick-deduct-points');
            const name = nameEl.value.trim() || formatDate(new Date());
            const points = parseInt(pointsEl.value);
            if (!points || points <= 0) { showAlert('请输入有效积分'); return; }
            totalPoints -= points;
            addRecord(name, -points, 'expense');
            nameEl.value = '';
            pointsEl.value = '';
            updatePointsDisplay();
            updateTodayPointsDisplay();
            saveData();
            showAlert(`扣减 -${points} 积分`);
        }
        
        // 快速兑换（自定义填入）
        function quickExchange() {
            const nameEl = document.getElementById('quick-exchange-name');
            const pointsEl = document.getElementById('quick-exchange-points');
            const name = nameEl.value.trim() || formatDate(new Date());
            const points = parseInt(pointsEl.value);
            if (!points || points <= 0) { showAlert('请输入有效积分'); return; }
            if (totalPoints < points) { showAlert('积分不足'); return; }
            totalPoints -= points;
            addRecord(name, -points, 'expense');
            nameEl.value = '';
            pointsEl.value = '';
            updatePointsDisplay();
            updateTodayPointsDisplay();
            saveData();
            showAlert(`兑换成功！消耗 ${points} 积分`);
        }
        
        function earnPoints(itemId) {
            const item = earnItems.find(i => i.id === itemId);
            if (item) {
                totalPoints += item.points;
                addRecord(item.name, item.points, 'income');
                updatePointsDisplay();
                updateTodayPointsDisplay();
                saveData();
                showAlert(`成功赚取${item.points}积分！`);
            }
        }
        
        // 显示自定义提示弹窗（复用同一个弹窗，避免多次提示时堆叠）
        let alertModalEl = null;
        function showAlert(message) {
            if (!alertModalEl || !document.body.contains(alertModalEl)) {
                alertModalEl = document.createElement('div');
                alertModalEl.id = 'app-alert-modal';
                alertModalEl.className = 'modal show';
                alertModalEl.innerHTML = `
                    <div class="modal-content">
                        <div class="modal-title">提示</div>
                        <div class="modal-body">
                            <p class="alert-message"></p>
                        </div>
                        <div class="modal-footer">
                            <button class="modal-btn confirm">确定</button>
                        </div>
                    </div>
                `;
                // 点击确定关闭
                alertModalEl.querySelector('.modal-btn').addEventListener('click', function() {
                    alertModalEl.classList.remove('show');
                });
                // 点击弹窗外部关闭
                alertModalEl.addEventListener('click', function(e) {
                    if (e.target === this) {
                        this.classList.remove('show');
                    }
                });
                document.body.appendChild(alertModalEl);
            }
            // 用 textContent 更新内容，避免 HTML 注入
            alertModalEl.querySelector('.alert-message').textContent = message;
            alertModalEl.classList.add('show');
        }
        
        // 扣减积分
        function deductPoints(itemId) {
            const item = deductItems.find(i => i.id === itemId);
            if (item) {
                totalPoints += item.points;
                addRecord(item.name, item.points, 'expense');
                updatePointsDisplay();
                updateTodayPointsDisplay();
                saveData();
                showAlert(`成功扣减${Math.abs(item.points)}积分！`);
            }
        }
        
        // 添加积分记录
        function addRecord(title, amount, type, date = null, timeStr = null) {
            const now = new Date();
            const recordDate = date ? new Date(date) : now;
            recordIdCounter++;
            records.unshift({
                id: recordIdCounter,
                title: title,
                amount: amount,
                type: type,
                date: formatDate(recordDate),
                time: timeStr || now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
            });
        }
        

        
        // 显示添加赚取积分项弹窗
        function showAddEarnItemModal() {
            currentEditItem = null;
            document.getElementById('earn-item-modal-title').textContent = '添加赚取积分项';
            document.getElementById('earn-item-name').value = '';
            document.getElementById('earn-item-points').value = '';
            document.getElementById('add-earn-item-modal').classList.add('show');
        }
        
        // 编辑赚取积分项
        function editEarnItem(itemId) {
            const item = earnItems.find(i => i.id === itemId);
            if (item) {
                currentEditItem = item;
                document.getElementById('earn-item-modal-title').textContent = '编辑赚取积分项';
                document.getElementById('earn-item-name').value = item.name;
                document.getElementById('earn-item-points').value = item.points;
                document.getElementById('add-earn-item-modal').classList.add('show');
            }
        }
        
        // 保存赚取积分项
        function saveEarnItem() {
            const name = document.getElementById('earn-item-name').value.trim();
            const points = parseInt(document.getElementById('earn-item-points').value);
            
            if (!name || isNaN(points)) {
                showAlert('请填写完整信息');
                return;
            }
            
            if (currentEditItem) {
                // 编辑
                currentEditItem.name = name;
                currentEditItem.points = points;
            } else {
                // 添加
                const newId = earnItems.length > 0 ? Math.max(...earnItems.map(i => i.id)) + 1 : 1;
                earnItems.push({ id: newId, name: name, points: points });
            }
            
            saveData();
            loadEarnManageList();
            closeModal('add-earn-item-modal');
        }
        
        // 删除赚取积分项
        function deleteEarnItem(itemId) {
            currentDeleteItem = itemId;
            currentDeleteType = 'earn';
            document.getElementById('delete-confirm-modal').classList.add('show');
        }
        
        // 显示添加扣减积分项弹窗
        function showAddDeductItemModal() {
            currentEditItem = null;
            document.getElementById('deduct-item-modal-title').textContent = '添加扣减积分项';
            document.getElementById('deduct-item-name').value = '';
            document.getElementById('deduct-item-points').value = '';
            document.getElementById('add-deduct-item-modal').classList.add('show');
        }
        
        // 编辑扣减积分项
        function editDeductItem(itemId) {
            const item = deductItems.find(i => i.id === itemId);
            if (item) {
                currentEditItem = item;
                document.getElementById('deduct-item-modal-title').textContent = '编辑扣减积分项';
                document.getElementById('deduct-item-name').value = item.name;
                document.getElementById('deduct-item-points').value = Math.abs(item.points);
                document.getElementById('add-deduct-item-modal').classList.add('show');
            }
        }
        
        // 保存扣减积分项
        function saveDeductItem() {
            const name = document.getElementById('deduct-item-name').value.trim();
            const points = parseInt(document.getElementById('deduct-item-points').value);
            
            if (!name || isNaN(points)) {
                showAlert('请填写完整信息');
                return;
            }
            
            if (currentEditItem) {
                // 编辑
                currentEditItem.name = name;
                currentEditItem.points = -points;
            } else {
                // 添加
                const newId = deductItems.length > 0 ? Math.max(...deductItems.map(i => i.id)) + 1 : 1;
                deductItems.push({ id: newId, name: name, points: -points });
            }
            
            saveData();
            loadDeductManageList();
            closeModal('add-deduct-item-modal');
        }
        
        // 删除扣减积分项
        function deleteDeductItem(itemId) {
            currentDeleteItem = itemId;
            currentDeleteType = 'deduct';
            document.getElementById('delete-confirm-modal').classList.add('show');
        }
        
        // 显示添加奖励弹窗
        function showAddRewardModal() {
            currentEditItem = null;
            document.getElementById('reward-modal-title').textContent = '添加兑换奖励';
            document.getElementById('reward-name').value = '';
            document.getElementById('reward-points').value = '';
            document.getElementById('add-reward-modal').classList.add('show');
        }
        
        // 编辑奖励
        function editReward(rewardId) {
            const reward = rewards.find(r => r.id === rewardId);
            if (reward) {
                currentEditItem = reward;
                document.getElementById('reward-modal-title').textContent = '编辑兑换奖励';
                document.getElementById('reward-name').value = reward.name;
                document.getElementById('reward-points').value = reward.points;
                document.getElementById('add-reward-modal').classList.add('show');
            }
        }
        
        // 保存奖励
        function saveReward() {
            const name = document.getElementById('reward-name').value.trim();
            const points = parseInt(document.getElementById('reward-points').value);
            
            if (!name || isNaN(points)) {
                showAlert('请填写完整信息');
                return;
            }
            
            if (currentEditItem) {
                // 编辑
                currentEditItem.name = name;
                currentEditItem.points = points;
            } else {
                // 添加
                const newId = rewards.length > 0 ? Math.max(...rewards.map(r => r.id)) + 1 : 1;
                rewards.push({ id: newId, name: name, points: points });
            }
            
            saveData();
            loadRewardManageList();
            closeModal('add-reward-modal');
        }
        
        // 删除奖励
        function deleteReward(rewardId) {
            currentDeleteItem = rewardId;
            currentDeleteType = 'reward';
            document.getElementById('delete-confirm-modal').classList.add('show');
        }
        
        // 显示兑换弹窗
        function showExchangeModal(rewardId) {
            const reward = rewards.find(r => r.id === rewardId);
            if (reward) {
                currentExchangeReward = reward;
                document.getElementById('exchange-reward-name').textContent = reward.name;
                document.getElementById('exchange-reward-points').textContent = reward.points + '积分';
                document.getElementById('exchange-confirm-modal').classList.add('show');
            }
        }
        
        // 确认兑换
        function confirmExchange() {
            if (currentExchangeReward && totalPoints >= currentExchangeReward.points) {
                totalPoints -= currentExchangeReward.points;
                addRecord('兑换：' + currentExchangeReward.name, -currentExchangeReward.points, 'expense');
                updatePointsDisplay();
                updateTodayPointsDisplay();
                saveData();
                closeModal('exchange-confirm-modal');
                showAlert('兑换成功！');
            } else {
                closeModal('exchange-confirm-modal');
                showAlert('积分不足！');
            }
        }
        
        // 显示补积分弹窗
        function showAddPointsModal() {
            // 设置默认日期为今天
            const today = new Date();
            const formattedDate = today.toISOString().split('T')[0];
            document.getElementById('add-points-date').value = formattedDate;
            document.getElementById('add-points-reason').value = '';
            document.getElementById('add-points-value').value = '';
            document.getElementById('add-points-modal').classList.add('show');
        }
        
        // 补积分
        function addPoints() {
            const reason = document.getElementById('add-points-reason').value.trim();
            const value = parseInt(document.getElementById('add-points-value').value);
            const dateStr = document.getElementById('add-points-date').value;
            
            if (!reason || isNaN(value) || !dateStr) {
                showAlert('请填写完整信息');
                return;
            }
            
            // 添加积分记录
            totalPoints += value;
            const recordTime = new Date(dateStr + 'T12:00:00').toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
            addRecord('补积分：' + reason, value, 'income', dateStr, recordTime);
            updatePointsDisplay();
            updateTodayPointsDisplay();
            saveData();
            
            // 关闭弹窗
            closeModal('add-points-modal');
            
            // 重新加载记录数据
            loadRecordsData();
            
            showAlert('补积分成功！');
        }
        
        // 显示清空积分弹窗
        function showClearPointsModal() {
            document.getElementById('clear-points-modal').classList.add('show');
        }
        
        // 确认清空积分（生成一条清空记录，不清空历史记录）
        function confirmClearPoints() {
            if (totalPoints > 0) {
                addRecord('积分清空', -totalPoints, 'clear');
                totalPoints = 0;
            } else if (totalPoints < 0) {
                totalPoints = 0;
            }
            updatePointsDisplay();
            updateTodayPointsDisplay();
            saveData();
            closeModal('clear-points-modal');
            loadCurrentPageData();
            showAlert('积分已清空！');
        }
        
        // 显示系统重置弹窗
        function showSystemResetModal() {
            document.getElementById('system-reset-modal').classList.add('show');
        }
        
        // 系统重置
        function systemReset(scope) {
            if (scope !== 'current' && scope !== 'all' && scope !== 'settings') return;
            let confirmText = '';
            if (scope === 'settings') {
                confirmText = '确定要重置参数项吗？\n\n将恢复默认的赚取积分项、扣除积分项和奖励兑换项。\n成员积分和记录不受影响。';
            } else if (scope === 'current') {
                confirmText = '确定要重置当前成员吗？\n\n将清空该成员的积分、记录，并恢复默认积分项。\n此操作不可恢复！';
            } else {
                confirmText = '确定要重置全部成员吗？\n\n将清空所有成员的积分、记录，并恢复默认积分项。\n此操作不可恢复！';
            }
            if (!confirm(confirmText)) return;
            
            // 恢复默认积分项和奖励项
            earnItems = getDefaultEarnItems();
            deductItems = getDefaultDeductItems();
            rewards = getDefaultRewards();
            
            if (scope === 'all') {
                // 重置所有成员
                members.forEach(m => {
                    m.totalPoints = 0;
                    m.records = [];
                    m.recordIdCounter = 0;
                });
                // 同步全局变量
                totalPoints = 0;
                records = [];
                recordIdCounter = 0;
            } else if (scope === 'current') {
                // 重置当前成员
                const m = getCurrentMember();
                if (m) {
                    m.totalPoints = 0;
                    m.records = [];
                    m.recordIdCounter = 0;
                }
                // 同步全局变量
                totalPoints = 0;
                records = [];
                recordIdCounter = 0;
            }
            
            saveData();
            syncFromMember();
            updatePointsDisplay();
            updateTodayPointsDisplay();
            closeModal('system-reset-modal');
            loadCurrentPageData();
            showAlert(scope === 'settings' ? '参数项已恢复默认' : '系统已重置为默认状态');
        }
        
        // 显示数据导入导出弹窗
        function showDataImportExportModal() {
            document.getElementById('data-import-export-modal').classList.add('show');
        }
        
        // 格式化日期时间：20260823-123456
        function formatExportDateTime(date) {
            const y = date.getFullYear();
            const m = String(date.getMonth() + 1).padStart(2, '0');
            const d = String(date.getDate()).padStart(2, '0');
            const h = String(date.getHours()).padStart(2, '0');
            const min = String(date.getMinutes()).padStart(2, '0');
            const s = String(date.getSeconds()).padStart(2, '0');
            return `${y}${m}${d}-${h}${min}${s}`;
        }
        
        // 格式化日期：20260823
        function formatExportDate(date) {
            const y = date.getFullYear();
            const m = String(date.getMonth() + 1).padStart(2, '0');
            const d = String(date.getDate()).padStart(2, '0');
            return `${y}${m}${d}`;
        }
        
        // 获取指定模式的所有 localStorage 数据
        function getModeData(mode) {
            const prefix = `${STORAGE_PREFIX}_${mode}_`;
            const data = {};
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(prefix)) {
                    const shortKey = key.substring(prefix.length);
                    data[shortKey] = localStorage.getItem(key);
                }
            }
            return data;
        }
        
        // 导出设置项数据（仅 earnItems/deductItems/rewards）
        function getSettingsData(mode) {
            const prefix = `${STORAGE_PREFIX}_${mode}_`;
            const keys = ['earnItems', 'deductItems', 'rewards'];
            const data = {};
            keys.forEach(key => {
                const value = localStorage.getItem(prefix + key);
                if (value !== null) {
                    data[key] = value;
                }
            });
            return data;
        }
        
        // 导出数据
        function exportData() {
            const type = document.getElementById('export-type').value;
            const scope = document.getElementById('export-scope').value;
            const modes = scope === 'both' ? ['parent', 'teacher'] : [currentMode];
            const exportObj = {
                version: 1,
                exportType: type,
                exportScope: scope,
                exportedAt: new Date().toISOString(),
                data: {}
            };
            
            modes.forEach(mode => {
                if (type === 'settings') {
                    exportObj.data[mode] = getSettingsData(mode);
                } else {
                    exportObj.data[mode] = getModeData(mode);
                }
            });
            
            const blob = new Blob([JSON.stringify(exportObj, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            const now = new Date();
            if (type === 'settings') {
                a.download = `积分小管家参数备份-${formatExportDate(now)}.json`;
            } else {
                a.download = `积分小管家积分备份-${formatExportDateTime(now)}.json`;
            }
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            closeModal('data-import-export-modal');
            showAlert('导出成功！');
        }
        
        // 导入数据
        function importData(input) {
            const file = input.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const imported = JSON.parse(e.target.result);
                    if (!imported || typeof imported !== 'object' || !imported.data) {
                        showAlert('文件格式不正确');
                        return;
                    }
                    
                    Object.keys(imported.data).forEach(mode => {
                        if (mode !== 'parent' && mode !== 'teacher') return;
                        const prefix = `${STORAGE_PREFIX}_${mode}_`;
                        const modeData = imported.data[mode];
                        Object.keys(modeData).forEach(key => {
                            if (modeData[key] === null) {
                                localStorage.removeItem(prefix + key);
                            } else {
                                localStorage.setItem(prefix + key, modeData[key]);
                            }
                        });
                    });
                    
                    // 重新加载当前模式数据
                    initData();
                    updateModeUI();
                    loadHomeData();
                    closeModal('data-import-export-modal');
                    showAlert('导入成功！');
                } catch (err) {
                    showAlert('导入失败：' + err.message);
                } finally {
                    input.value = '';
                }
            };
            reader.onerror = function() {
                showAlert('文件读取失败');
                input.value = '';
            };
            reader.readAsText(file);
        }
        
        // 密码相关
        const PASSWORD_KEY = STORAGE_PREFIX + '_password';
        
        function isPasswordSet() {
            return !!localStorage.getItem(PASSWORD_KEY);
        }
        
        // 兼容新旧格式的密码解码：新版为 encodeURIComponent，旧版为 btoa
        function decodeStoredPassword(stored) {
            if (typeof stored === 'string' && stored.indexOf('%') !== -1) {
                try {
                    return decodeURIComponent(stored);
                } catch (e) { /* 回退到旧格式解码 */ }
            }
            return atob(stored);
        }
        
        function showPasswordSettingModal() {
            const statusEl = document.getElementById('password-status');
            const disableBtn = document.getElementById('disable-password-btn');
            document.getElementById('new-password').value = '';
            document.getElementById('confirm-password').value = '';
            if (isPasswordSet()) {
                statusEl.textContent = '已设置';
                disableBtn.style.display = 'inline-block';
            } else {
                statusEl.textContent = '未设置';
                disableBtn.style.display = 'none';
            }
            document.getElementById('password-setting-modal').classList.add('show');
        }
        
        function savePassword() {
            const newPwd = document.getElementById('new-password').value.trim();
            const confirmPwd = document.getElementById('confirm-password').value.trim();
            
            if (!newPwd || !confirmPwd) {
                showAlert('请输入密码并确认');
                return;
            }
            if (newPwd !== confirmPwd) {
                showAlert('两次输入的密码不一致');
                return;
            }
            
            // 使用 encodeURIComponent 编码，支持中文等任意字符
            localStorage.setItem(PASSWORD_KEY, encodeURIComponent(newPwd));
            closeModal('password-setting-modal');
            showAlert('密码设置成功');
        }
        
        function disablePassword() {
            if (!confirm('确定要取消密码吗？')) return;
            localStorage.removeItem(PASSWORD_KEY);
            closeModal('password-setting-modal');
            showAlert('已取消密码');
        }
        
        function showPasswordEntryModal() {
            document.getElementById('entry-password').value = '';
            document.getElementById('password-entry-modal').classList.add('show');
            // 自动聚焦输入框（手机端自动弹出键盘）
            setTimeout(function() {
                const input = document.getElementById('entry-password');
                if (input && input.offsetParent !== null) {
                    input.focus();
                }
            }, 300);
        }
        
        function checkPassword() {
            const input = document.getElementById('entry-password').value;
            const stored = localStorage.getItem(PASSWORD_KEY);
            if (!stored) {
                closeModal('password-entry-modal');
                return;
            }
            try {
                if (decodeStoredPassword(stored) === input) {
                    closeModal('password-entry-modal');
                } else {
                    // 密码错误：清空输入框并聚焦，明确提示用户重新输入
                    const entryInput = document.getElementById('entry-password');
                    if (entryInput) {
                        entryInput.value = '';
                    }
                    showAlert('密码错误');
                    if (entryInput) {
                        entryInput.focus();
                    }
                }
            } catch (e) {
                showAlert('密码校验失败');
            }
        }
        
        // 确认删除
        function confirmDelete() {
            if (pendingDeleteMemberId !== null) {
                deleteMember(pendingDeleteMemberId);
                pendingDeleteMemberId = null;
                closeModal('delete-confirm-modal');
                return;
            }
            if (currentDeleteType === 'earn') {
                earnItems = earnItems.filter(i => i.id !== currentDeleteItem);
                loadEarnManageList();
            } else if (currentDeleteType === 'deduct') {
                deductItems = deductItems.filter(i => i.id !== currentDeleteItem);
                loadDeductManageList();
            } else if (currentDeleteType === 'reward') {
                rewards = rewards.filter(r => r.id !== currentDeleteItem);
                loadRewardManageList();
            }
            
            saveData();
            closeModal('delete-confirm-modal');
        }
        
        // 撤销记录
        function undoRecord(recordId) {
            const idx = records.findIndex(r => r.id === recordId);
            if (idx !== -1) {
                totalPoints -= records[idx].amount;
                records.splice(idx, 1);
                updatePointsDisplay();
                updateTodayPointsDisplay();
                saveData();
                loadDayRecords();
                if (document.getElementById('records-page').classList.contains('active')) {
                    loadCurrentWeekGrid('records-week-grid', 'records-week-score-text');
                    loadHistoryWeeks();
                }
            }
        }
        
        // 关闭弹窗
        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('show');
        }
        
        // 重载当前活动页面数据
        function loadCurrentPageData() {
            if (document.getElementById('home-page').classList.contains('active')) {
                loadHomeData();
            } else if (document.getElementById('records-page').classList.contains('active')) {
                loadRecordsData();
            }
        }
        
        // 点击弹窗外部关闭（密码输入弹窗除外）
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === this && this.id !== 'password-entry-modal') {
                    this.classList.remove('show');
                }
            });
        });
        
        // 初始化
        document.addEventListener('DOMContentLoaded', function() {
            // 读取上次使用的模式（自动记忆）
            currentMode = localStorage.getItem(CURRENT_MODE_KEY) === 'teacher' ? 'teacher' : 'parent';
            
            // 如果设置了密码，先验证密码
            if (isPasswordSet()) {
                showPasswordEntryModal();
            }
            
            initData();
            saveData(); // 默认数据落盘
            updateModeUI();
            switchPage('home');
        });
