# Crud demo attempt #2
A work in progress (but mostly functional) CRUD demo with roles and permissions.

## ROLE
- A single role or multiple roles can be assigned to a user
- Each role has a collection of permissions
- Every user needs to have a minimum of [user] role
- Custom roles could be created

### Roles
1. system:              This user has access to everything.
2. user:                The most basic role, a user with this role can read and update their profile.
3. user_admin:          A user with this role can: create, read, update, and delete any user
4. project_admin:       A user with this role can: create, read, update, and delete any project
                        (TODO: can only touch their owned projects)
5. project_item_admin:  A user with this role can create, read, update and delete  items in a project

## PERMISSIONS
- A role is assigned a single permission or multiple permissions.
- Each role has been preconfigured with a default set of permissions.
- Using the router, you can pass a single permission or multiple permissions to authenticate, example:

> A user wants to update their profile, they need role: [user], which contains the permission [profile_read] AND [profile_update]
> The same user wants to update a project, they also need the role [project_admin], which containbs permissions [project_item_read] AND [project_item_update]

## How to test
Using []./tests/test.rest], change the userid then send the request to test the role and permission.

