---
sidebar_position: 1
---

# Archetype Manifest

An Archetype Manifest is a YAML file that defines the resources an application needs and the capabilities it can provide.

## Structure

```yaml
kind: Archetype
version: v1.0
name: <archetype name>
description: <short description>

available_capabilities:
  - name: <capability name>
    repo: <git repository URL>
    ref: <branch, tag, or commit>
    required: <true|false>

resources:
  - resource_id: <unique identifier>
    kind: <resource kind>
    parameters:
      <key>: <value>
```

## Fields

| Field                    | Type   | Description                              |
|--------------------------|--------|------------------------------------------|
| `kind`                   | string | Always `Archetype`                       |
| `version`                | string | Manifest version. Currently `v1.0`       |
| `name`                   | string | Human-readable archetype name            |
| `description`            | string | Short description (max 512 characters)   |
| `available_capabilities` | list   | Capabilities this archetype can provide  |
| `resources`              | list   | Resources to provision                   |

### Resource definition

| Field         | Type   | Description                                               |
|---------------|--------|-----------------------------------------------------------|
| `resource_id` | string | Unique identifier for this resource within the manifest   |
| `kind`        | string | Resource type (e.g. `GitProject`)                         |
| `parameters`  | map    | Input parameters for the resource                         |

### Capability definition

| Field      | Type    | Description                                      |
|------------|---------|--------------------------------------------------|
| `name`     | string  | Capability name                                  |
| `repo`     | string  | Git repository containing the capability         |
| `ref`      | string  | Branch, tag, or commit to use                    |
| `required` | boolean | Whether this capability must be enabled          |
