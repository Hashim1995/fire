export const truncate = (input, limit, edge) =>
    input?.length > limit ? `${input.substring(0, edge)}...` : input;