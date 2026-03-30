---
sidebar_position: 3
---

# Example: Application with SCM and CI/CD

This example shows a minimal archetype that provisions a Git repository and then wires its output into a deploy key resource using context references.

```yaml
kind: Archetype
version: v1.0
name: Standard Application
description: Provisions a Git repository and attaches a CI/CD deploy key.

available_capabilities:
  - name: ci-cd
    repo: https://git.example.com/hauki-tech/lahna-cap-cicd
    ref: main
    required: true

resources:
  # 1. Create the Git repository.
  #    After provisioning, Lahna stores its output attributes in context:
  #      $resources.root.app-repo.project_name
  #      $resources.root.app-repo.external_id
  #      $resources.root.app-repo.slug
  #      $resources.root.app-repo.scm_project_uid
  - resource_id: app-repo
    kind: GitProject
    parameters:
      project_name: my-application

  # 2. Create a deploy key scoped to the repository created above.
  #    The repository_slug parameter is resolved from the app-repo output.
  - resource_id: cicd-deploy-key
    kind: DeployKey
    parameters:
      repository_slug: $resources.root.app-repo.slug
      key_title: cicd-deploy-key
```

## What happens at provisioning time

```text
1. Validate manifest
   └─ Resolve all $resources.* references statically
      ├─ scope "root" exists ✓
      ├─ resource "app-repo" exists ✓
      └─ attribute "slug" declared on GitProject ✓

2. Provision app-repo (GitProject)
   └─ Output stored in context:
        root.app-repo.slug = "my-application"
        root.app-repo.external_id = "42"
        ...

3. Provision cicd-deploy-key (DeployKey)
   └─ $resources.root.app-repo.slug → "my-application"
```

Because `cicd-deploy-key` depends on `app-repo`, Lahna always provisions `app-repo` first.
