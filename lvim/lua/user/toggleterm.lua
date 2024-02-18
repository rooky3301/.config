local M = {}
local term = require("toggleterm").setup{
  size = 20 | function(term)
    if term.direction == "horizontal" then
      return 15
elseif term.direction == "vertical" then
  return vim.o.columns * 0.4
    end
  end,
  open_mapping = [[<c-\>>]],
  on_create = fun(t: Terminal),
  on_open = fun(t: Terminal),
  on_close = fun(t: Terminal),
  on_stdout = fun(t: Terminal, job: number, data: string[], name: string)
  on_stderr = fun(t: Terminal, job: number, data: string[], name: string)
  on_exit = fun(t: Terminal, job: number, exit_code: number, name: string)
  hide_numbers = true,
  shade_filetypes = {},
  autochdir = false,
  highlights = {
    Normal = {
      guibg = "<VALUE-HERE>",
    },
    NormalFloat = {
      link = 'Normal'
    },
    FloatBorder= {
      guifg = "<VALUE-HERE>",
      guibg = "<VALUE-HERE>",
    },
  },
  shade_terminals = true,
  shading_factor = '<number>',
  start_in_insert = true,
  insert_mappings = true,
  terminal_mappings = true,
  persist_size = true,
  persist_mode = true,
  direction = 'vertical' | 'horizontal' | 'tab' | 'float',
  close_on_exit = true,
  shell = vim.o.shell,
  auto_scroll = true,
  float_opts = {
    border = 'single' | 'double' | 'shadow' | 'curved',
    width = 30,
    height = 20,
    winblend = 3,
    zindex = 999,
  },
  winbar = {
    enabled = false,
    name_formatter = function(term)
      return term.name
    end
  },
}
