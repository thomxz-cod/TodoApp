import { defineSchema, defineTable } from "convex/server"

import { v } from "convex/values"
export default defineSchema({
    todo : defineTable ({
        text: v.string(),
        isCompleted: v.boolean()
    })
})