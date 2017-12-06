const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svgoutput', false, /\.svg$/)
requireAll(req)
