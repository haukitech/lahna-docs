---
sidebar_position: 1
---

# GitProject

Creates a project (repository) in the connected source control platform.

## Input parameters

| Parameter      | Type   | Required | Description          |
|----------------|--------|----------|----------------------|
| `project_name` | string | yes      | Name of the project  |

## Output attributes

Output attributes are available as context references after the resource is provisioned.

| Attribute         | Type   | Description                                |
|-------------------|--------|--------------------------------------------|
| `project_name`    | string | Name of the created project                |
| `external_id`     | string | ID assigned by the source control platform |
| `slug`            | string | URL-friendly project identifier            |
| `scm_project_uid` | UUID   | Internal SCM project identifier            |

## Example

```yaml
- resource_id: app-repo
  kind: GitProject
  parameters:
    project_name: my-application
```

Referencing the output from another resource:

```yaml
repository_slug: $resources.root.app-repo.slug
```
