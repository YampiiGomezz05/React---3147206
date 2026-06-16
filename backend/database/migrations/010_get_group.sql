INSERT INTO group_permissions (
    group_id,
    permissions_id
)

SELECT 
    1,
    permissions_id
FROM permissions
WHERE permissions_codename IN (
    'list_user',
    'create_user'
);
