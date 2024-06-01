CREATE TABLE IF NOT EXISTS "testing_image" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"url" varchar(1024) NOT NULL,
	"user_id" varchar(256) NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp with time zone
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "testing_image" ("name");