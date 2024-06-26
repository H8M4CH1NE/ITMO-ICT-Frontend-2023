from django.urls import path
from .views import (
    TaskByUncompletedAimView,
    UserTasksStatusView,
    TaskDetailView,
    UserListView,
    TaskByCategoryListView,
    TaskUpdateStatusView,
    AssignTaskToUserView,
    CreateTaskView,
    CreateCommentView,
    DeleteCommentView,
    CommentListView,
    CategoryListView,
    AimListView,
    TaskListView,
    TaskUserView,
    TaskDeleteView,
    CommentByTaskListView,
    UserMeDetailView,
)

urlpatterns = [
    path('users/', UserListView.as_view(), name='user-list'),
    path('tasks/by-category/<str:category_name>/', TaskByCategoryListView.as_view(), name='task-by-category-list'),
    path('tasks/uncompleted-aims/', TaskByUncompletedAimView.as_view(), name='task-uncompleted-aims'),
    path('users/<int:user_id>/tasks/status/', UserTasksStatusView.as_view(), name='user-tasks-status'),
    path('tasks/<int:pk>/', TaskDetailView.as_view(), name='task-detail'),
    path('tasks/<int:task_id>/update-status/', TaskUpdateStatusView.as_view(), name='task-update-status'),
    path('assign-task-to-user/', AssignTaskToUserView.as_view(), name='assign-task-to-user'),
    path('tasks/create/', CreateTaskView.as_view(), name='create-task'),
    path('create-comment/', CreateCommentView.as_view(), name='create-comment'),
    path('delete-comment/<int:comment_id>/', DeleteCommentView.as_view(), name='delete-comment'),
    path('comment-list/', CommentListView.as_view(), name='comment-list'),

    path('categories/', CategoryListView.as_view(), name='categories-list'),
    path('aims/', AimListView.as_view(), name='aims-list'),
    path('tasks/', TaskListView.as_view(), name='task-list'),
    path('tasks/users/<int:task_id>', TaskUserView.as_view(), name='task-user'),
    path('tasks/delete/<int:pk>/', TaskDeleteView.as_view(), name='task-delete'),
    path('comments/<int:task_id>/', CommentByTaskListView.as_view(), name='comments-by-task'),
    path('user/me', UserMeDetailView.as_view(), name='user-detail'),
]
