<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TaskMaster AI - Gestión Inteligente</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --bg-color: #F0F8FF;
            --primary-color: #1E90FF;
            --secondary-color: #98FB98;
            --accent-color: #87CEEB;
            --text-color: #2F4F4F;
            --card-bg: #FFFFFF;
            --border-color: #B0E0E6;
            --shadow-color: rgba(30, 144, 255, 0.2);
            --glow-color: rgba(30, 144, 255, 0.4);
            --success-color: #32CD32;
            --warning-color: #FFD700;
            --danger-color: #FF4500;
            --overdue-color: #DC143C;
            --font-size-multiplier: 1;
        }

        /* Dark Mode Base */
        [data-theme="dark"] {
            --bg-color: #0B1120;
            --text-color: #F8FAFC;
            --card-bg: #1E293B;
            --border-color: #64748B;
            --success-color: #10B981;
            --warning-color: #F59E0B;
            --danger-color: #EF4444;
            --overdue-color: #F87171;
        }

        /* Dark Mode + Color Palettes - Enhanced with more vibrant colors */
        [data-theme="dark"][data-palette="palette1"] {
            --primary-color: #60A5FA;
            --secondary-color: #34D399;
            --accent-color: #2563EB;
            --border-color: #3B82F6;
            --shadow-color: rgba(96, 165, 250, 0.5);
            --glow-color: rgba(96, 165, 250, 0.7);
            --card-bg: #1E293B;
        }

        [data-theme="dark"][data-palette="palette2"] {
            --primary-color: #34D399;
            --secondary-color: #22D3EE;
            --accent-color: #059669;
            --border-color: #10B981;
            --shadow-color: rgba(52, 211, 153, 0.5);
            --glow-color: rgba(52, 211, 153, 0.7);
            --card-bg: #1E293B;
        }

        [data-theme="dark"][data-palette="palette3"] {
            --primary-color: #A78BFA;
            --secondary-color: #C084FC;
            --accent-color: #7C3AED;
            --border-color: #8B5CF6;
            --shadow-color: rgba(167, 139, 250, 0.5);
            --glow-color: rgba(167, 139, 250, 0.7);
            --card-bg: #1E293B;
        }

        [data-theme="dark"][data-palette="palette4"] {
            --primary-color: #FBBF24;
            --secondary-color: #FCD34D;
            --accent-color: #D97706;
            --border-color: #F59E0B;
            --shadow-color: rgba(251, 191, 36, 0.5);
            --glow-color: rgba(251, 191, 36, 0.7);
            --card-bg: #1E293B;
        }

        [data-theme="dark"][data-palette="palette5"] {
            --primary-color: #F87171;
            --secondary-color: #FB7185;
            --accent-color: #DC2626;
            --border-color: #EF4444;
            --shadow-color: rgba(248, 113, 113, 0.5);
            --glow-color: rgba(248, 113, 113, 0.7);
            --card-bg: #1E293B;
        }

        /* Dark Mode Modern Enhancements */
        [data-theme="dark"][data-performance="modern"] {
            background: linear-gradient(135deg, #0B1120 0%, #1E293B 50%, #334155 100%);
        }

        [data-theme="dark"][data-performance="modern"] .modern-card {
            background: rgba(30, 41, 59, 0.85);
            border: 2px solid var(--border-color);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px var(--shadow-color);
        }

        [data-theme="dark"][data-performance="modern"] .modern-card:hover {
            background: rgba(30, 41, 59, 0.95);
            border: 2px solid var(--primary-color);
            box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5), 0 0 30px var(--glow-color);
            transform: translateY(-2px);
        }

        /* Dark Mode Card Borders */
        [data-theme="dark"] .modern-card {
            border: 2px solid var(--border-color);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3), 0 0 10px var(--shadow-color);
        }

        [data-theme="dark"] .modern-card:hover {
            border: 2px solid var(--primary-color);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), 0 0 20px var(--glow-color);
        }

        [data-theme="dark"][data-performance="modern"] body::before {
            background: radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
            opacity: 0.4;
        }

        /* Performance Mode - Minimal effects */
        [data-performance="performance"] {
            --animation-duration: 0.05s;
        }

        [data-performance="performance"] * {
            transition-duration: 0.05s !important;
            animation-duration: 0.05s !important;
        }

        [data-performance="performance"] .modern-card {
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            backdrop-filter: none;
        }

        [data-performance="performance"] .modern-card:hover {
            transform: none;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        [data-performance="performance"] .modern-button {
            box-shadow: none;
            background: var(--primary-color);
        }

        [data-performance="performance"] .modern-button:hover {
            transform: none;
            box-shadow: none;
            background: var(--secondary-color);
        }

        [data-performance="performance"] body::before {
            display: none;
        }

        [data-performance="performance"] .bottom-nav {
            backdrop-filter: none;
            background: var(--card-bg);
            border-top: 2px solid var(--border-color);
        }

        [data-performance="performance"] .calendar-day:hover {
            transform: none;
        }

        [data-performance="performance"] .task-indicator:hover {
            transform: none;
        }

        [data-performance="performance"] .bottom-nav-item:hover {
            background: var(--border-color);
        }

        /* Modern Mode - Enhanced visuals */
        [data-performance="modern"] {
            --animation-duration: 0.4s;
        }

        [data-performance="modern"] .modern-card {
            backdrop-filter: blur(15px);
            background: rgba(255, 255, 255, 0.85);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        [data-theme="dark"][data-performance="modern"] .modern-card {
            background: rgba(30, 41, 59, 0.85);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        [data-performance="modern"] .modern-card:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
        }

        [data-performance="modern"] .modern-button {
            box-shadow: 0 8px 25px var(--shadow-color);
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            position: relative;
            overflow: hidden;
        }

        [data-performance="modern"] .modern-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            transition: left 0.6s;
        }

        [data-performance="modern"] .modern-button:hover::before {
            left: 100%;
        }

        [data-performance="modern"] .modern-button:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 16px 40px var(--shadow-color);
        }

        [data-performance="modern"] .bottom-nav {
            backdrop-filter: blur(25px);
            background: rgba(255, 255, 255, 0.8);
            border-top: 1px solid rgba(255, 255, 255, 0.3);
        }

        [data-theme="dark"][data-performance="modern"] .bottom-nav {
            background: rgba(15, 23, 42, 0.8);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        [data-performance="modern"] .bottom-nav-item {
            border-radius: 16px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        [data-performance="modern"] .bottom-nav-item:hover {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 8px 20px var(--shadow-color);
        }

        [data-performance="modern"] .calendar-day {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        [data-performance="modern"] .calendar-day:hover {
            transform: scale(1.05) translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            z-index: 10;
        }

        [data-performance="modern"] .task-indicator {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        [data-performance="modern"] .task-indicator:hover {
            transform: translateY(-3px) scale(1.1);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            z-index: 20;
        }

        [data-performance="modern"] body::before {
            background: radial-gradient(circle at 20% 80%, var(--glow-color) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, var(--secondary-color) 0%, transparent 50%);
            opacity: 0.3;
            animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }

        /* Color Palettes */
        [data-theme="palette1"] {
            --bg-color: #F0F8FF;
            --primary-color: #1E90FF;
            --secondary-color: #98FB98;
            --accent-color: #87CEEB;
            --text-color: #2F4F4F;
            --card-bg: #FFFFFF;
            --border-color: #B0E0E6;
            --shadow-color: rgba(30, 144, 255, 0.2);
            --glow-color: rgba(30, 144, 255, 0.4);
        }

        [data-theme="palette2"] {
            --bg-color: #E6F0FA;
            --primary-color: #3CB371;
            --secondary-color: #20B2AA;
            --accent-color: #98FB98;
            --text-color: #006400;
            --card-bg: #FFFFFF;
            --border-color: #90EE90;
            --shadow-color: rgba(60, 179, 113, 0.3);
            --glow-color: rgba(60, 179, 113, 0.5);
        }

        [data-theme="palette3"] {
            --bg-color: #E6E6FA;
            --primary-color: #6A5ACD;
            --secondary-color: #BA55D3;
            --accent-color: #DDA0DD;
            --text-color: #4B0082;
            --card-bg: #FFFFFF;
            --border-color: #D8BFD8;
            --shadow-color: rgba(106, 90, 205, 0.3);
            --glow-color: rgba(106, 90, 205, 0.5);
        }

        [data-theme="palette4"] {
            --bg-color: #FFFACD;
            --primary-color: #FFD700;
            --secondary-color: #FFA500;
            --accent-color: #FFFF99;
            --text-color: #8B4513;
            --card-bg: #FFFFFF;
            --border-color: #F0E68C;
            --shadow-color: rgba(255, 215, 0, 0.3);
            --glow-color: rgba(255, 215, 0, 0.5);
        }

        [data-theme="palette5"] {
            --bg-color: #F5F5F5;
            --primary-color: #FF4500;
            --secondary-color: #2E8B57;
            --accent-color: #FFA07A;
            --text-color: #2F2F2F;
            --card-bg: #FFFFFF;
            --border-color: #D3D3D3;
            --shadow-color: rgba(255, 69, 0, 0.3);
            --glow-color: rgba(255, 69, 0, 0.5);
        }

        /* Font Size Classes */
        .font-size-small {
            --font-size-multiplier: 0.875;
        }

        .font-size-normal {
            --font-size-multiplier: 1;
        }

        .font-size-large {
            --font-size-multiplier: 1.125;
        }

        .font-size-xl {
            --font-size-multiplier: 1.25;
        }

        body {
            font-family: 'Roboto', sans-serif;
            background: linear-gradient(135deg, var(--bg-color) 0%, var(--accent-color) 100%);
            color: var(--text-color);
            transition: all 0.3s ease;
            padding-bottom: 90px;
            position: relative;
            overflow-x: hidden;
            min-height: 100vh;
            font-size: calc(14px * var(--font-size-multiplier));
        }

        /* Optimized animations - reduced for performance */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 20% 80%, var(--glow-color) 0%, transparent 50%);
            pointer-events: none;
            z-index: -1;
            opacity: 0.2;
        }

        .modern-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            box-shadow: 0 2px 8px var(--shadow-color);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            position: relative;
            overflow: hidden;
        }

        .modern-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px var(--shadow-color);
        }

        .modern-button {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            color: white;
            border: none;
            border-radius: 8px;
            padding: 10px 20px;
            font-weight: 600;
            font-size: calc(14px * var(--font-size-multiplier));
            transition: all 0.2s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            box-shadow: 0 2px 4px var(--shadow-color);
        }

        .modern-button:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 8px var(--shadow-color);
        }

        .modern-button:active {
            transform: translateY(0);
        }

        .modern-input {
            background: var(--card-bg);
            border: 2px solid var(--border-color);
            border-radius: 12px;
            padding: 14px 16px;
            font-size: calc(14px * var(--font-size-multiplier));
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            width: 100%;
            color: var(--text-color);
            position: relative;
            box-shadow: 
                0 2px 4px rgba(0, 0, 0, 0.05),
                0 1px 2px rgba(0, 0, 0, 0.1);
            font-weight: 500;
        }

        .modern-input:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 
                0 0 0 3px rgba(59, 130, 246, 0.1),
                0 4px 12px rgba(0, 0, 0, 0.1);
            transform: translateY(-1px);
        }

        .modern-input:hover {
            border-color: var(--primary-color);
            box-shadow: 
                0 4px 8px rgba(0, 0, 0, 0.08),
                0 2px 4px rgba(0, 0, 0, 0.12);
        }

        /* ===== SELECTORES ULTRA MODERNOS PERSONALIZADOS ===== */
        
        /* Ocultar selectores nativos */
        select.modern-input, input[type="date"].modern-input {
            display: none;
        }

        /* Contenedor personalizado para selectores */
        .custom-selector {
            position: relative;
            background: var(--card-bg);
            border-radius: 12px;
            border: 2px solid var(--border-color);
            padding: 12px 16px;
            font-weight: 600;
            font-size: calc(14px * var(--font-size-multiplier));
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            color: var(--text-color);
            min-height: 48px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .custom-selector .selector-display {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .custom-selector .selector-icon {
            font-size: calc(20px * var(--font-size-multiplier));
            transition: all 0.3s ease;
        }

        .custom-selector .selector-text {
            font-weight: 700;
            color: var(--text-color);
        }

        .custom-selector .selector-arrow {
            width: 24px;
            height: 24px;
            background: var(--primary-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .custom-selector .selector-arrow::after {
            content: '▼';
            color: white;
            font-size: 12px;
            font-weight: bold;
            transition: all 0.3s ease;
        }

        /* Dropdown personalizado */
        .custom-dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--card-bg);
            border: 2px solid var(--primary-color);
            border-radius: 12px;
            margin-top: 4px;
            z-index: 9999;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            max-height: 300px;
            overflow-y: auto;
        }

        .custom-dropdown.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0) scale(1);
        }

        .custom-dropdown-item {
            padding: 16px 24px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            display: flex;
            align-items: center;
            gap: 12px;
            font-weight: 600;
            color: var(--text-color);
        }

        .custom-dropdown-item:first-child {
            border-radius: 17px 17px 0 0;
        }

        .custom-dropdown-item:last-child {
            border-radius: 0 0 17px 17px;
            border-bottom: none;
        }

        .custom-dropdown-item:only-child {
            border-radius: 17px;
        }

        .custom-dropdown-item:hover {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            color: white;
            transform: translateX(8px) scale(1.02);
            box-shadow: 0 8px 25px var(--shadow-color);
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .custom-dropdown-item.selected {
            background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
            color: white;
            font-weight: 800;
            box-shadow: 0 8px 25px var(--glow-color);
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        }

        .custom-dropdown-item .item-icon {
            font-size: calc(18px * var(--font-size-multiplier));
            min-width: 24px;
        }

        /* Efectos Hover Simplificados */
        .custom-selector:hover {
            border-color: var(--primary-color);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
            transform: translateY(-1px);
        }

        .custom-selector:hover .selector-arrow {
            transform: rotate(180deg);
        }

        /* Estado activo (dropdown abierto) */
        .custom-selector.active {
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px var(--shadow-color);
            z-index: 9998;
            position: relative;
        }

        .custom-selector.active .selector-arrow {
            transform: rotate(180deg);
        }

        /* Calendario personalizado */
        .custom-calendar {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--card-bg);
            border: 2px solid var(--primary-color);
            border-radius: 12px;
            margin-top: 4px;
            z-index: 9999;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            padding: 16px;
            min-width: 320px;
            width: 320px;
            max-height: 400px;
            overflow: visible;
        }

        .custom-calendar.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0) scale(1);
        }

        .calendar-header-custom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding: 0 8px;
        }

        .calendar-nav-custom {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            border: none;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 8px 20px var(--shadow-color);
            font-size: 18px;
            font-weight: bold;
        }

        .calendar-nav-custom:hover {
            transform: scale(1.15) translateY(-2px);
            box-shadow: 0 12px 30px var(--glow-color);
            background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
        }

        .calendar-month-custom {
            font-size: calc(18px * var(--font-size-multiplier));
            font-weight: 800;
            color: var(--primary-color);
            text-align: center;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .calendar-grid-custom {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 1px;
            background: var(--border-color);
            border-radius: 8px;
            padding: 1px;
            overflow: hidden;
            margin-bottom: 12px;
        }

        .calendar-day-header-custom {
            text-align: center;
            font-weight: 700;
            color: var(--primary-color);
            padding: 8px 4px;
            font-size: calc(12px * var(--font-size-multiplier));
            text-transform: uppercase;
            letter-spacing: 1px;
            background: var(--card-bg);
            border-bottom: 1px solid var(--border-color);
        }

        .calendar-days-container-custom {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            grid-column: 1 / -1;
            gap: 1px;
        }

        .calendar-day-custom {
            aspect-ratio: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-weight: 600;
            font-size: calc(14px * var(--font-size-multiplier));
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            position: relative;
            background: var(--card-bg);
            border: 1px solid transparent;
            min-height: 32px;
        }

        .calendar-day-custom:hover {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            color: white;
            transform: scale(1.1) translateY(-2px);
            box-shadow: 0 8px 20px var(--shadow-color);
            border-color: var(--accent-color);
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .calendar-day-custom.selected {
            background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
            color: white;
            transform: scale(1.05);
            box-shadow: 0 12px 30px var(--glow-color);
            border-color: white;
            font-weight: 800;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        }

        .calendar-day-custom.today {
            background: linear-gradient(135deg, var(--warning-color) 0%, #FFA500 100%);
            color: white;
            font-weight: 800;
            box-shadow: 0 8px 20px rgba(255, 215, 0, 0.4);
            animation: todayPulse 2s ease-in-out infinite;
        }

        .calendar-day-custom.other-month {
            opacity: 0.3;
            color: #999;
        }

        @keyframes todayPulse {
            0%, 100% { 
                box-shadow: 0 8px 20px rgba(255, 215, 0, 0.4);
            }
            50% { 
                box-shadow: 0 12px 30px rgba(255, 215, 0, 0.6);
                transform: scale(1.05);
            }
        }

        /* ===== ESTILOS PARA MODO OSCURO ===== */
        
        [data-theme="dark"] .custom-selector {
            background: var(--card-bg);
            border-color: var(--border-color);
            color: var(--text-color);
            box-shadow: 
                0 8px 25px rgba(0, 0, 0, 0.6),
                0 4px 12px rgba(0, 0, 0, 0.4),
                inset 0 2px 4px rgba(255, 255, 255, 0.08),
                inset 0 -2px 4px rgba(0, 0, 0, 0.3);
        }

        [data-theme="dark"] .custom-selector:hover {
            border-color: var(--primary-color);
            box-shadow: 
                0 15px 40px rgba(0, 0, 0, 0.8),
                0 8px 20px rgba(0, 0, 0, 0.6),
                0 0 0 6px var(--shadow-color),
                inset 0 3px 6px rgba(255, 255, 255, 0.15),
                inset 0 -3px 6px rgba(0, 0, 0, 0.4);
            color: white;
        }

        [data-theme="dark"] .custom-selector.active {
            border-color: var(--accent-color);
            box-shadow: 
                0 20px 50px rgba(0, 0, 0, 0.9),
                0 12px 30px rgba(0, 0, 0, 0.7),
                0 0 0 8px var(--glow-color),
                0 0 0 12px rgba(255, 255, 255, 0.05),
                inset 0 4px 8px rgba(255, 255, 255, 0.2),
                inset 0 -4px 8px rgba(0, 0, 0, 0.5);
            color: white;
        }

        [data-theme="dark"] .custom-dropdown {
            background: var(--card-bg);
            border-color: var(--primary-color);
            box-shadow: 
                0 25px 80px rgba(0, 0, 0, 0.8),
                0 12px 40px rgba(0, 0, 0, 0.6),
                0 0 0 12px var(--shadow-color);
        }

        [data-theme="dark"] .custom-dropdown-item {
            color: var(--text-color);
            border-bottom-color: rgba(255, 255, 255, 0.1);
        }

        [data-theme="dark"] .calendar-day-header-custom {
            color: var(--primary-color);
            background: var(--card-bg);
        }

        [data-theme="dark"] .calendar-month-custom {
            color: var(--primary-color);
        }

        [data-theme="dark"] .calendar-day-custom {
            color: var(--text-color);
            background: var(--card-bg);
        }

        [data-theme="dark"] .calendar-day-custom.other-month {
            color: #666;
        }

        [data-theme="dark"] .custom-dropdown-item:hover {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            color: white;
            box-shadow: 0 8px 20px var(--shadow-color);
        }

        [data-theme="dark"] .custom-dropdown-item.selected {
            background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
            color: white;
            box-shadow: 0 8px 25px var(--glow-color);
        }

        [data-theme="dark"] .custom-calendar {
            background: var(--card-bg);
            border-color: var(--primary-color);
            box-shadow: 
                0 25px 80px rgba(0, 0, 0, 0.8),
                0 12px 40px rgba(0, 0, 0, 0.6),
                0 0 0 12px var(--shadow-color);
        }

        /* ===== MODO RENDIMIENTO - Efectos Reducidos ===== */
        
        [data-performance="performance"] .custom-selector {
            transition: all 0.2s ease;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            background-image: none;
        }

        [data-performance="performance"] .custom-selector:hover {
            transform: none;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        [data-performance="performance"] .custom-selector.active {
            transform: none;
            box-shadow: 0 0 0 3px var(--shadow-color);
            animation: none;
        }

        [data-performance="performance"] .custom-dropdown {
            backdrop-filter: none;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        [data-performance="performance"] .custom-calendar {
            backdrop-filter: none;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }



        /* Modern Textarea */
        [data-performance="modern"] textarea.modern-input {
            resize: vertical;
            min-height: 80px;
        }

        [data-performance="modern"] textarea.modern-input:focus {
            min-height: 100px;
        }

        /* Logo Styles - Notebook and Pencil */
        .app-logo {
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            padding: 2px;
        }

        .logo-container {
            position: relative;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Notebook Base */
        .logo-notebook {
            width: 24px;
            height: 30px;
            background: linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%);
            border: 2px solid var(--primary-color);
            border-radius: 3px;
            position: relative;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            z-index: 1;
        }

        /* Notebook Spiral */
        .logo-notebook::before {
            content: '';
            position: absolute;
            left: -3px;
            top: 2px;
            bottom: 2px;
            width: 6px;
            background: repeating-linear-gradient(
                to bottom,
                var(--secondary-color) 0px,
                var(--secondary-color) 2px,
                transparent 2px,
                transparent 4px
            );
            border-radius: 3px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Notebook Lines */
        .logo-notebook::after {
            content: '';
            position: absolute;
            top: 6px;
            left: 3px;
            right: 3px;
            bottom: 6px;
            background: repeating-linear-gradient(
                to bottom,
                transparent 0px,
                transparent 3px,
                var(--border-color) 3px,
                var(--border-color) 4px
            );
            opacity: 0.6;
        }

        /* Pencil */
        .logo-pencil {
            width: 4px;
            height: 22px;
            background: linear-gradient(to bottom, 
                #FFD700 0%, 
                #FFA500 12%, 
                var(--primary-color) 12%, 
                var(--secondary-color) 35%, 
                var(--primary-color) 35%, 
                var(--primary-color) 70%, 
                #8B4513 70%, 
                #D2691E 85%,
                #654321 100%);
            border-radius: 2px 2px 0 0;
            position: absolute;
            right: -2px;
            top: 2px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            transform: rotate(15deg);
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
            z-index: 2;
        }

        /* Pencil Tip */
        .logo-pencil::before {
            content: '';
            position: absolute;
            top: -3px;
            left: -1px;
            width: 6px;
            height: 6px;
            background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, var(--accent-color) 100%);
            border-radius: 50%;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        /* Pencil Point */
        .logo-pencil::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 1px;
            width: 0;
            height: 0;
            border-left: 1px solid transparent;
            border-right: 1px solid transparent;
            border-top: 4px solid #2C2C2C;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));
        }

        /* Hover Effects */
        .app-logo:hover .logo-notebook {
            transform: scale(1.05) rotate(-2deg);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
            border-color: var(--secondary-color);
        }

        .app-logo:hover .logo-notebook::before {
            background: repeating-linear-gradient(
                to bottom,
                var(--accent-color) 0px,
                var(--accent-color) 2px,
                transparent 2px,
                transparent 4px
            );
        }

        .app-logo:hover .logo-pencil {
            transform: rotate(25deg) scale(1.1);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .app-logo:hover .logo-pencil::before {
            background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 50%, var(--accent-color) 100%);
            box-shadow: 0 2px 8px var(--glow-color);
            transform: scale(1.2);
        }

        .app-logo:hover .logo-pencil::after {
            border-top-color: #1a1a1a;
            transform: scale(1.1);
        }

        /* Modern Logo Animations */
        [data-performance="modern"] .app-logo {
            animation: logoFloat 4s ease-in-out infinite;
        }

        [data-performance="modern"] .logo-notebook {
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        [data-performance="modern"] .logo-pencil {
            animation: pencilWrite 3s ease-in-out infinite;
        }

        [data-performance="modern"] .app-logo:hover .logo-notebook {
            transform: scale(1.1) rotate(-3deg);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        [data-performance="modern"] .app-logo:hover .logo-pencil {
            transform: rotate(30deg) scale(1.15);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }

        [data-performance="modern"] .app-logo:hover .logo-pencil::before {
            animation: logoGlow 2s ease-in-out infinite alternate;
        }

        @keyframes logoFloat {
            0%, 100% { 
                transform: translateY(0px) rotate(0deg); 
            }
            25% { 
                transform: translateY(-1px) rotate(1deg); 
            }
            50% { 
                transform: translateY(-2px) rotate(0deg); 
            }
            75% { 
                transform: translateY(-1px) rotate(-1deg); 
            }
        }

        @keyframes pencilWrite {
            0%, 100% { 
                transform: rotate(15deg) translateX(0px); 
            }
            25% { 
                transform: rotate(18deg) translateX(1px); 
            }
            50% { 
                transform: rotate(15deg) translateX(0px); 
            }
            75% { 
                transform: rotate(12deg) translateX(-1px); 
            }
        }

        @keyframes logoGlow {
            0%, 100% { 
                box-shadow: 0 2px 8px var(--glow-color); 
            }
            50% { 
                box-shadow: 0 4px 16px var(--glow-color); 
            }
        }

        /* Bottom Navigation - Optimized */
        .bottom-nav {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: var(--card-bg);
            border-top: 1px solid var(--border-color);
            padding: 8px 12px 12px;
            z-index: 50;
            box-shadow: 0 -2px 8px var(--shadow-color);
            backdrop-filter: blur(10px);
        }

        .nav-container {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 4px;
            max-width: 750px;
            margin: 0 auto;
            align-items: center;
        }

        .bottom-nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 8px 4px;
            color: #6B7280;
            transition: all 0.2s ease;
            border-radius: 12px;
            cursor: pointer;
            position: relative;
            text-align: center;
        }

        .bottom-nav-item:hover {
            color: var(--primary-color);
            background: rgba(59, 130, 246, 0.1);
        }

        .bottom-nav-item.active {
            color: var(--primary-color);
            background: rgba(59, 130, 246, 0.1);
        }

        .bottom-nav-item svg {
            margin-bottom: 2px;
        }

        .bottom-nav-item span {
            font-size: calc(10px * var(--font-size-multiplier));
            font-weight: 600;
        }

        /* Calendar Styles - Optimized */
        .calendar-container {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 16px;
            box-shadow: 0 2px 8px var(--shadow-color);
            position: relative;
            overflow: hidden;
        }

        .calendar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }

        .calendar-nav-btn {
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 8px;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .calendar-nav-btn:hover {
            background: var(--secondary-color);
        }

        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 1px;
            background: var(--border-color);
            border-radius: 8px;
            padding: 1px;
            overflow: hidden;
            min-height: 280px;
        }

        .calendar-days-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 1px;
            grid-column: 1 / -1;
        }

        .calendar-day-header {
            text-align: center;
            font-weight: 700;
            color: var(--primary-color);
            padding: 12px 4px;
            font-size: calc(12px * var(--font-size-multiplier));
            text-transform: uppercase;
            letter-spacing: 0.5px;
       
