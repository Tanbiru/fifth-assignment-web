
        document.querySelectorAll('.complete-btn').forEach(button => {
            button.addEventListener('click', function() {
                if (!this.disabled) {
                    let task = this.closest('.task-card').getAttribute('data-task');
                    let log = document.getElementById('activityLog');
                    let taskAssigned = document.getElementById('taskAssigned');
                    let taskCount = document.getElementById('taskCount');
    
                    let currentAssigned = Math.max(0, parseInt(taskAssigned.textContent) - 1);
                    taskAssigned.textContent = currentAssigned;
                    taskCount.textContent = parseInt(taskCount.textContent) + 1;
    
                    log.innerHTML = `<p class="text-sm font-medium text-[#00303C]">
                        You have completed the task: ${task} at ${new Date().toLocaleTimeString()}
                    </p>` + log.innerHTML;
    
                    this.classList.add('bg-gray-400', 'cursor-not-allowed');
                    this.classList.remove('bg-blue-500');
                    this.disabled = true;
    
                    // Alert if no tasks are left
                    if (currentAssigned === 0) {
                        alert("All tasks are completed!");
                    }
                }
            });
        });
    
        document.getElementById('clearHistory').addEventListener('click', function() {
            document.getElementById('activityLog').innerHTML = '';
        });
    