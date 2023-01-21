import * as zg from "zapatos/generate"
import * as dotenv from "dotenv"
import { getConnectionStringFromEnv } from "pg-connection-from-env"

dotenv.config()

async function main() {
  await zg.generate({
    db: {
      connectionString: getConnectionStringFromEnv(),
    },
    unprefixedSchema: process.env.POSTGRES_SCHEMA ?? "public",
    schemas: {
      [process.env.POSTGRES_SCHEMA ?? "public"]: {
        include: [
          "assignees",
          "tags_commit",
          "tags",
          "issue_labels",
          "reviews__links_pull_request",
          "reviews__links_html",
          "reviews_user",
          "reviews__links",
          "reviews",
          "review_comments__links_html",
          "review_comments__links_self",
          "review_comments__links_pull_request",
          "review_comments__links",
          "review_comments_user",
          "review_comments",
          "issues_assignee",
          "issues_milestone",
          "issues_user",
          "issues",
          "comments_user",
          "comments",
          "pull_requests_requested_reviewers",
          "pull_requests__links_html",
          "pull_requests__links_review_comments",
          "pull_requests__links_commits",
          "issues_pull_request",
          "pull_requests__links_self",
          "pull_requests__links_comments",
          "pull_requests__links_issue",
          "pull_requests__links_review_comment",
          "pull_requests__links_statuses",
          "pull_requests_base",
          "pull_requests_user",
          "pull_requests_assignee",
          "pull_requests_auto_merge",
          "pull_requests_head",
          "pull_requests_milestone",
          "pull_requests__links",
          "pull_requests",
          "issues_labels",
          "issues_assignees",
          "team_memberships",
          "team_members",
          "users",
          "pull_requests_labels",
          "teams",
          "repositories_owner",
          "repositories_permissions",
          "repositories_license",
          "repositories",
          "pull_requests_assignees",
          "pull_requests_requested_teams",
          "organizations",
          "organizations_plan",
        ],
        exclude: [],
      },
    },
    outDir: "./src",
  })
}

main()
