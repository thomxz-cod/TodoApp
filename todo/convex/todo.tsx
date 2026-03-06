import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// coletar todos os "to dos"
export const getTodos = query({
    handler : async(ctx) => {
        const todos = await ctx.db.query("todos").order("desc").collect();
        return todos;
    },
})

// coletar adicionar um "to do"
export const addTodo = mutation({
    args: { text: v.string() },
    
    handler : async(ctx, args) => {
        const todoId = await ctx.db.insert("todos", {
            text : args.text,
            isCompleted: false
        });
        return todoId;
    },
})

// deletar todos os "to dos"
export const clearAllTodos = mutation({
    handler : async(ctx) => {
        const todos = await ctx.db.query("todos").collect();

        for (const todo of todos){
            await ctx.db.delete(todo._id);
        }

        return { deletedCount: todos.length };
    },
})